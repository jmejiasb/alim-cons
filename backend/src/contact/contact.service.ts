import { Injectable } from '@nestjs/common';
import { CreateContactInput } from './dto/create-contact.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './contact.entity';
import { Repository } from 'typeorm';
import { EmailService } from 'src/common/email/email.service';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private readonly repo: Repository<Contact>,
    private readonly emailService: EmailService,
  ) {}

  async create(input: CreateContactInput): Promise<Contact> {
    const contact = this.repo.create(input);
    const savedContact = await this.repo.save(contact);

    try {
      await this.emailService.sendContactNotificationToAdmin(input);
    } catch (error) {
      console.error('Failed to send contact notification email', error);
    }

    return savedContact;
  }

  findAll(): Promise<Contact[]> {
    return this.repo.find();
  }
}
