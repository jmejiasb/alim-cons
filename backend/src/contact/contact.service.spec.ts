import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { ContactsService } from './contact.service';
import { Contact } from './contact.entity';
import { EmailService } from 'src/common/email/email.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { create } from 'domain';

describe('ContactService', () => {
  let service: ContactsService;

  let repo: jest.Mocked<Partial<Repository<Contact>>>;
  let emailService: jest.Mocked<Partial<EmailService>>;

  beforeEach(async () => {
    repo = {
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
    };


    emailService = {
      sendContactNotificationToAdmin: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactsService,
        {
          provide: getRepositoryToken(Contact),
          useValue: repo,
        },
        {
          provide: EmailService,
          useValue: emailService,
        },
      ],
    }).compile();

    service = module.get<ContactsService>(ContactsService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

   describe('create', () => {
    it('should create contact and send email notification', async () => {
      const input = {
        name: 'Ali',
        email: 'ali@test.com',
        phone: '+56912345678',
        message: 'Hello',
      };

      const createdContact = {
        ...input,
      };

      const savedContact = {
        id: 'contact-1',
        ...input,
      };

      (repo.create as jest.Mock).mockReturnValue(createdContact);
      (repo.save as jest.Mock).mockResolvedValue(savedContact);
      (
        emailService.sendContactNotificationToAdmin as jest.Mock
      ).mockResolvedValue(undefined);

      const result = await service.create(input as any);

      expect(repo.create).toHaveBeenCalledWith(input);
      expect(repo.save).toHaveBeenCalledWith(createdContact);
      expect(emailService.sendContactNotificationToAdmin).toHaveBeenCalledWith(
        input,
      );
      expect(result).toEqual(savedContact);
    });

    it('should still return saved contact if email notification fails', async () => {
      const input = {
        name: 'Ali',
        email: 'ali@test.com',
        phone: '+56912345678',
        message: 'Hello',
      };

      const createdContact = {
        ...input,
      };

      const savedContact = {
        id: 'contact-1',
        ...input,
      };

      jest.spyOn(console, 'error').mockImplementation(() => undefined);

      (repo.create as jest.Mock).mockReturnValue(createdContact);
      (repo.save as jest.Mock).mockResolvedValue(savedContact);
      (
        emailService.sendContactNotificationToAdmin as jest.Mock
      ).mockRejectedValue(new Error('smtp fail'));

      const result = await service.create(input as any);

      expect(repo.create).toHaveBeenCalledWith(input);
      expect(repo.save).toHaveBeenCalledWith(createdContact);
      expect(emailService.sendContactNotificationToAdmin).toHaveBeenCalledWith(
        input,
      );
      expect(console.error).toHaveBeenCalledWith(
        'Failed to send contact notification email',
        expect.any(Error),
      );
      expect(result).toEqual(savedContact);
    });
  });

  describe('findAll', () => {
    it('should return all contacts', async () => {
      const contacts = [
        {
          id: 'contact-1',
          name: 'Ali',
          email: 'ali@test.com',
          phone: '+56912345678',
          message: 'Hello',
        },
      ];

      (repo.find as jest.Mock).mockResolvedValue(contacts);

      const result = await service.findAll();

      expect(repo.find).toHaveBeenCalledTimes(1);
      expect(result).toEqual(contacts);
    });
  });
});
