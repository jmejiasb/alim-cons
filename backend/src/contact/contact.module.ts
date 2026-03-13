import { Module } from '@nestjs/common';
import { ContactsService } from './contact.service';
import { EmailModule } from 'src/common/email/email.module';

@Module({
  imports: [EmailModule],
  providers: [ContactsService],
  exports: [ContactsService],
})
export class ContactModule {}
