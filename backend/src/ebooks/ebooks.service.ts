import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ebook } from './ebooks.entity';
import { CreateEbookInput } from './dto/create-ebook.input';
import { UpdateEbookInput } from './dto/update-ebook.input';

@Injectable()
export class EbooksService {
  constructor(
    @InjectRepository(Ebook)
    private readonly repo: Repository<Ebook>,
  ) {}

  findAll(): Promise<Ebook[]> {
    return this.repo.find();
  }

  findById(id: string): Promise<Ebook | null> {
    return this.repo.findOne({
      where: { id },
    });
  }

  create(input: CreateEbookInput): Promise<Ebook> {
    const ebook = this.repo.create(input);
    return this.repo.save(ebook);
  }

  async findByIdOrFail(id: string): Promise<Ebook> {
    const ebook = await this.findById(id);
    if (!ebook) throw new NotFoundException('Ebook not found');
    return ebook;
  }

  async update(input: UpdateEbookInput): Promise<Ebook> {
    const { id, ...data } = input;

    const ebook = await this.findByIdOrFail(id);

    Object.assign(ebook, data);

    return this.repo.save(ebook);
  }
}
