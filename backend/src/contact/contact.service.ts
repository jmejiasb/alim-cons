import { Injectable } from '@nestjs/common';
import { CreateContactInput } from './dto/create-contact.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private readonly repo: Repository<Contact>,
  ) {}

  create(input: CreateContactInput): Promise<Contact> {
    const contact = this.repo.create(input);
    return this.repo.save(contact);
  }

  findAll(): Promise<Contact[]> {
    return this.repo.find();
  }
}
