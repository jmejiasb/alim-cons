import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EbooksService } from './ebooks.service';
import { Ebook } from './ebooks.entity';
import { CreateEbookInput } from './dto/create-ebook.input';
import { UpdateEbookInput } from './dto/update-ebook.input';

describe('EbooksService', () => {
  let service: EbooksService;
  let repo: jest.Mocked<Pick<Repository<Ebook>, 'find' | 'findOne' | 'create' | 'save'>>;

  const mockEbook: Ebook = {
    id: 'ebook-1',
    title: 'Organízate para cuidarte',
    desc: 'Un ebook de prueba',
    filePath: 'https://example.com/ebook.pdf',
    imgUrl: 'https://example.com/cover.jpg',
    regularPrice: 5990,
    salesPrice: 0,
  } as Ebook;

  beforeEach(async () => {
    const repoMock: jest.Mocked<
      Pick<Repository<Ebook>, 'find' | 'findOne' | 'create' | 'save'>
    > = {
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EbooksService,
        {
          provide: getRepositoryToken(Ebook),
          useValue: repoMock,
        },
      ],
    }).compile();

    service = module.get<EbooksService>(EbooksService);
    repo = module.get(getRepositoryToken(Ebook));
  });

  describe('findAll', () => {
    it('returns all ebooks', async () => {
      repo.find.mockResolvedValue([mockEbook]);

      const result = await service.findAll();

      expect(repo.find).toHaveBeenCalledTimes(1);
      expect(result).toEqual([mockEbook]);
    });
  });

  describe('findById', () => {
    it('returns the ebook when it exists', async () => {
      repo.findOne.mockResolvedValue(mockEbook);

      const result = await service.findById('ebook-1');

      expect(repo.findOne).toHaveBeenCalledWith({
        where: { id: 'ebook-1' },
      });
      expect(result).toEqual(mockEbook);
    });

    it('returns null when the ebook does not exist', async () => {
      repo.findOne.mockResolvedValue(null);

      const result = await service.findById('missing-id');

      expect(repo.findOne).toHaveBeenCalledWith({
        where: { id: 'missing-id' },
      });
      expect(result).toBeNull();
    });
  });

  describe('create', () => {
    it('creates and saves an ebook', async () => {
      const input: CreateEbookInput = {
        title: 'Nuevo ebook',
        desc: 'Descripción nueva',
        filePath: 'https://example.com/new-ebook.pdf',
        imgUrl: 'https://example.com/new-cover.jpg',
        regularPrice: 7990,
        salesPrice: 4990,
      };

      const createdEbook = { ...mockEbook, ...input } as Ebook;

      repo.create.mockReturnValue(createdEbook);
      repo.save.mockResolvedValue(createdEbook);

      const result = await service.create(input);

      expect(repo.create).toHaveBeenCalledWith(input);
      expect(repo.save).toHaveBeenCalledWith(createdEbook);
      expect(result).toEqual(createdEbook);
    });

    it('creates and saves an ebook without optional fields', async () => {
      const input: CreateEbookInput = {
        title: 'Nuevo ebook',
        desc: undefined as never,
        filePath: 'https://example.com/new-ebook.pdf',
        imgUrl: 'https://example.com/new-cover.jpg',
        regularPrice: 7990,
        salesPrice: undefined,
      };

      const createdEbook = {
        id: 'ebook-2',
        ...input,
      } as Ebook;

      repo.create.mockReturnValue(createdEbook);
      repo.save.mockResolvedValue(createdEbook);

      const result = await service.create(input);

      expect(repo.create).toHaveBeenCalledWith(input);
      expect(repo.save).toHaveBeenCalledWith(createdEbook);
      expect(result).toEqual(createdEbook);
    });
  });

  describe('findByIdOrFail', () => {
    it('returns the ebook when found', async () => {
      jest.spyOn(service, 'findById').mockResolvedValue(mockEbook);

      const result = await service.findByIdOrFail('ebook-1');

      expect(service.findById).toHaveBeenCalledWith('ebook-1');
      expect(result).toEqual(mockEbook);
    });

    it('throws NotFoundException when not found', async () => {
      jest.spyOn(service, 'findById').mockResolvedValue(null);

      await expect(service.findByIdOrFail('missing-id')).rejects.toThrow(
        new NotFoundException('Ebook not found'),
      );

      expect(service.findById).toHaveBeenCalledWith('missing-id');
    });
  });

  describe('update', () => {
    it('updates an ebook and saves it', async () => {
      const input: UpdateEbookInput = {
        id: 'ebook-1',
        title: 'Título actualizado',
        salesPrice: 2990,
      };

      const existingEbook = { ...mockEbook };
      const savedEbook = {
        ...existingEbook,
        title: 'Título actualizado',
        salesPrice: 2990,
      } as Ebook;

      jest.spyOn(service, 'findByIdOrFail').mockResolvedValue(existingEbook);
      repo.save.mockResolvedValue(savedEbook);

      const result = await service.update(input);

      expect(service.findByIdOrFail).toHaveBeenCalledWith('ebook-1');
      expect(repo.save).toHaveBeenCalledWith({
        ...mockEbook,
        title: 'Título actualizado',
        salesPrice: 2990,
      });
      expect(result).toEqual(savedEbook);
    });

    it('updates only the provided fields', async () => {
      const input: UpdateEbookInput = {
        id: 'ebook-1',
        desc: 'Descripción actualizada',
      };

      const existingEbook = { ...mockEbook };
      const savedEbook = {
        ...existingEbook,
        desc: 'Descripción actualizada',
      } as Ebook;

      jest.spyOn(service, 'findByIdOrFail').mockResolvedValue(existingEbook);
      repo.save.mockResolvedValue(savedEbook);

      const result = await service.update(input);

      expect(repo.save).toHaveBeenCalledWith({
        ...mockEbook,
        desc: 'Descripción actualizada',
      });
      expect(result).toEqual(savedEbook);
    });

    it('throws when trying to update a missing ebook', async () => {
      const input: UpdateEbookInput = {
        id: 'missing-id',
        title: 'No existe',
      };

      jest
        .spyOn(service, 'findByIdOrFail')
        .mockRejectedValue(new NotFoundException('Ebook not found'));

      await expect(service.update(input)).rejects.toThrow(NotFoundException);
      expect(repo.save).not.toHaveBeenCalled();
    });
  });
});