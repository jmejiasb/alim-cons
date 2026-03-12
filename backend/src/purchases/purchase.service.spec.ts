import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchasesService } from './purchase.service';
import { Purchase } from './purchase.entity';
import { PurchaseItem } from './purchase-item.entity';
import { PurchaseStatus } from './purchase-status.enum';
import { EbooksService } from 'src/ebooks/ebooks.service';
import { EmailService } from 'src/common/email/email.service';
import { StorageService } from 'src/common/storage/storage.service';

describe('PurchasesService', () => {
  let service: PurchasesService;

  let repo: jest.Mocked<Partial<Repository<Purchase>>>;
  let purchaseItemRepo: jest.Mocked<Partial<Repository<PurchaseItem>>>;
  let ebooksService: jest.Mocked<Partial<EbooksService>>;
  let emailService: jest.Mocked<Partial<EmailService>>;
  let storageService: jest.Mocked<Partial<StorageService>>;

  beforeEach(async () => {
    repo = {
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
    };

    purchaseItemRepo = {
      create: jest.fn(),
    };

    ebooksService = {
      findByIdOrFail: jest.fn(),
    };

    emailService = {
      sendPurchaseNotificationToAdmin: jest.fn(),
      sendPurchaseConfirmationToCustomer: jest.fn(),
      sendDownloadLinks: jest.fn(),
    };

    storageService = {
      createSignedDownload: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurchasesService,
        {
          provide: getRepositoryToken(Purchase),
          useValue: repo,
        },
        {
          provide: getRepositoryToken(PurchaseItem),
          useValue: purchaseItemRepo,
        },
        {
          provide: EbooksService,
          useValue: ebooksService,
        },
        {
          provide: EmailService,
          useValue: emailService,
        },
        {
          provide: StorageService,
          useValue: storageService,
        },
      ],
    }).compile();

    service = module.get<PurchasesService>(PurchasesService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('create', () => {
    it('should create purchase items using salesPrice when present', async () => {
      const input = {
        name: 'Ali',
        email: 'ali@test.com',
        items: [{ ebookId: 'ebook-1' }],
      };

      const ebook = {
        id: 'ebook-1',
        title: 'Clean Code',
        regularPrice: 20,
        salesPrice: 15,
      };

      const createdItem = {
        ebook,
        priceAtPurchase: 15,
      };

      const createdPurchase = {
        ...input,
        items: [createdItem],
      };

      const savedPurchase = {
        id: 'purchase-1',
        status: PurchaseStatus.PENDING_VERIFICATION,
        ...createdPurchase,
      };

      (ebooksService.findByIdOrFail as jest.Mock).mockResolvedValue(ebook);
      (purchaseItemRepo.create as jest.Mock).mockReturnValue(createdItem);
      (repo.create as jest.Mock).mockReturnValue(createdPurchase);
      (repo.save as jest.Mock).mockResolvedValue(savedPurchase);
      (
        emailService.sendPurchaseNotificationToAdmin as jest.Mock
      ).mockResolvedValue(undefined);
      (
        emailService.sendPurchaseConfirmationToCustomer as jest.Mock
      ).mockResolvedValue(undefined);

      const result = await service.create(input);

      expect(ebooksService.findByIdOrFail).toHaveBeenCalledWith('ebook-1');
      expect(purchaseItemRepo.create).toHaveBeenCalledWith({
        ebook,
        priceAtPurchase: 15,
      });
      expect(repo.create).toHaveBeenCalledWith({
        ...input,
        items: [createdItem],
      });
      expect(repo.save).toHaveBeenCalledWith(createdPurchase);
      expect(
        emailService.sendPurchaseNotificationToAdmin,
      ).toHaveBeenCalledWith('Ali', 'ali@test.com', [createdItem]);
      expect(
        emailService.sendPurchaseConfirmationToCustomer,
      ).toHaveBeenCalledWith('Ali', 'ali@test.com');
      expect(result).toEqual(savedPurchase);
    });

    it('should fall back to regularPrice when salesPrice is null', async () => {
      const input = {
        name: 'Ali',
        email: 'ali@test.com',
        items: [{ ebookId: 'ebook-1' }],
      };

      const ebook = {
        id: 'ebook-1',
        title: 'DDD',
        regularPrice: 30,
        salesPrice: null,
      };

      const createdItem = {
        ebook,
        priceAtPurchase: 30,
      };

      (ebooksService.findByIdOrFail as jest.Mock).mockResolvedValue(ebook);
      (purchaseItemRepo.create as jest.Mock).mockReturnValue(createdItem);
      (repo.create as jest.Mock).mockReturnValue({
        ...input,
        items: [createdItem],
      });
      (repo.save as jest.Mock).mockResolvedValue({
        id: 'purchase-1',
        status: PurchaseStatus.PENDING_VERIFICATION,
        ...input,
        items: [createdItem],
      });
      (
        emailService.sendPurchaseNotificationToAdmin as jest.Mock
      ).mockResolvedValue(undefined);
      (
        emailService.sendPurchaseConfirmationToCustomer as jest.Mock
      ).mockResolvedValue(undefined);

      await service.create(input as any);

      expect(purchaseItemRepo.create).toHaveBeenCalledWith({
        ebook,
        priceAtPurchase: 30,
      });
    });

    it('should not fail if purchase creation emails throw', async () => {
      const input = {
        name: 'Ali',
        email: 'ali@test.com',
        items: [{ ebookId: 'ebook-1' }],
      };

      const ebook = {
        id: 'ebook-1',
        title: 'Refactoring',
        regularPrice: 25,
        salesPrice: 10,
      };

      const createdItem = {
        ebook,
        priceAtPurchase: 10,
      };

      const createdPurchase = {
        ...input,
        items: [createdItem],
      };

      const savedPurchase = {
        id: 'purchase-1',
        status: PurchaseStatus.PENDING_VERIFICATION,
        ...createdPurchase,
      };

      jest.spyOn(console, 'error').mockImplementation(() => undefined);

      (ebooksService.findByIdOrFail as jest.Mock).mockResolvedValue(ebook);
      (purchaseItemRepo.create as jest.Mock).mockReturnValue(createdItem);
      (repo.create as jest.Mock).mockReturnValue(createdPurchase);
      (repo.save as jest.Mock).mockResolvedValue(savedPurchase);
      (
        emailService.sendPurchaseNotificationToAdmin as jest.Mock
      ).mockRejectedValue(new Error('smtp fail'));
      (
        emailService.sendPurchaseConfirmationToCustomer as jest.Mock
      ).mockResolvedValue(undefined);

      const result = await service.create(input as any);

      expect(result).toEqual(savedPurchase);
      expect(console.error).toHaveBeenCalledWith(
        'Failed to send purchase creation emails',
        expect.any(Error),
      );
    });
  });

  describe('findByIdOrFail', () => {
    it('should return purchase when found', async () => {
      const purchase = {
        id: 'purchase-1',
        name: 'Ali',
        email: 'ali@test.com',
        status: PurchaseStatus.PENDING_VERIFICATION,
      };

      (repo.findOne as jest.Mock).mockResolvedValue(purchase);

      const result = await service.findByIdOrFail('purchase-1');

      expect(repo.findOne).toHaveBeenCalledWith({
        where: { id: 'purchase-1' },
      });
      expect(result).toEqual(purchase);
    });

    it('should throw NotFoundException when purchase does not exist', async () => {
      (repo.findOne as jest.Mock).mockResolvedValue(null);

      await expect(service.findByIdOrFail('missing-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update purchase and not send download links if status did not change to completed', async () => {
      const existingPurchase = {
        id: 'purchase-1',
        name: 'Ali',
        email: 'ali@test.com',
        status: PurchaseStatus.PENDING_VERIFICATION,
        items: [],
      };

      const updatedPurchase = {
        ...existingPurchase,
        name: 'Ali Updated',
      };

      (repo.findOne as jest.Mock).mockResolvedValue(existingPurchase);
      (repo.save as jest.Mock).mockResolvedValue(updatedPurchase);

      const result = await service.update({
        id: 'purchase-1',
        name: 'Ali Updated',
      } as any);

      expect(repo.findOne).toHaveBeenCalledWith({
        where: { id: 'purchase-1' },
        relations: ['items', 'items.ebook'],
      });
      expect(repo.save).toHaveBeenCalledWith({
        ...existingPurchase,
        name: 'Ali Updated',
      });
      expect(emailService.sendDownloadLinks).not.toHaveBeenCalled();
      expect(result).toEqual(updatedPurchase);
    });

    it('should throw NotFoundException when updating a missing purchase', async () => {
      (repo.findOne as jest.Mock).mockResolvedValue(null);

      await expect(
        service.update({
          id: 'missing-id',
          status: PurchaseStatus.COMPLETED,
        } as any),
      ).rejects.toThrow(NotFoundException);
    });

    it('should send download links when status changes to completed', async () => {
      const existingPurchase = {
        id: 'purchase-1',
        name: 'Ali',
        email: 'ali@test.com',
        status: PurchaseStatus.PENDING_VERIFICATION,
        items: [
          {
            ebook: {
              title: 'Clean Code',
              filePath: 'ebooks/clean-code.pdf',
            },
          },
          {
            ebook: {
              title: 'Refactoring',
              filePath: 'ebooks/refactoring.pdf',
            },
          },
        ],
      };

      const updatedPurchase = {
        ...existingPurchase,
        status: PurchaseStatus.COMPLETED,
      };

      (repo.findOne as jest.Mock).mockResolvedValue(existingPurchase);
      (repo.save as jest.Mock).mockResolvedValue(updatedPurchase);
      (storageService.createSignedDownload as jest.Mock)
        .mockResolvedValueOnce('https://download-1')
        .mockResolvedValueOnce('https://download-2');
      (emailService.sendDownloadLinks as jest.Mock).mockResolvedValue(
        undefined,
      );

      const result = await service.update({
        id: 'purchase-1',
        status: PurchaseStatus.COMPLETED,
      } as any);

      expect(storageService.createSignedDownload).toHaveBeenNthCalledWith(
        1,
        'ebooks/clean-code.pdf',
      );
      expect(storageService.createSignedDownload).toHaveBeenNthCalledWith(
        2,
        'ebooks/refactoring.pdf',
      );
      expect(emailService.sendDownloadLinks).toHaveBeenCalledWith(
        'Ali',
        'ali@test.com',
        [
          { title: 'Clean Code', url: 'https://download-1' },
          { title: 'Refactoring', url: 'https://download-2' },
        ],
      );
      expect(result).toEqual(updatedPurchase);
    });

    it('should not fail update if sending download links throws', async () => {
      const existingPurchase = {
        id: 'purchase-1',
        name: 'Ali',
        email: 'ali@test.com',
        status: PurchaseStatus.PENDING_VERIFICATION,
        items: [
          {
            ebook: {
              title: 'Clean Code',
              filePath: 'ebooks/clean-code.pdf',
            },
          },
        ],
      };

      const updatedPurchase = {
        ...existingPurchase,
        status: PurchaseStatus.COMPLETED,
      };

      jest.spyOn(console, 'error').mockImplementation(() => undefined);

      (repo.findOne as jest.Mock).mockResolvedValue(existingPurchase);
      (repo.save as jest.Mock).mockResolvedValue(updatedPurchase);
      (storageService.createSignedDownload as jest.Mock).mockRejectedValue(
        new Error('storage fail'),
      );

      const result = await service.update({
        id: 'purchase-1',
        status: PurchaseStatus.COMPLETED,
      } as any);

      expect(result).toEqual(updatedPurchase);
      expect(console.error).toHaveBeenCalledWith(
        'Failed to send download links email',
        expect.any(Error),
      );
    });

    it('should not send download links if purchase is already completed', async () => {
      const existingPurchase = {
        id: 'purchase-1',
        name: 'Ali',
        email: 'ali@test.com',
        status: PurchaseStatus.COMPLETED,
        items: [
          {
            ebook: {
              title: 'Clean Code',
              filePath: 'ebooks/clean-code.pdf',
            },
          },
        ],
      };

      const updatedPurchase = {
        ...existingPurchase,
        name: 'Ali Updated',
      };

      (repo.findOne as jest.Mock).mockResolvedValue(existingPurchase);
      (repo.save as jest.Mock).mockResolvedValue(updatedPurchase);

      await service.update({
        id: 'purchase-1',
        name: 'Ali Updated',
      } as any);

      expect(storageService.createSignedDownload).not.toHaveBeenCalled();
      expect(emailService.sendDownloadLinks).not.toHaveBeenCalled();
    });
  });
});