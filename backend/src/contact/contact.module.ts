import { Module } from '@nestjs/common';
import { ContactsService } from './contact.service';
import { EmailModule } from 'src/common/email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contact.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Contact]), EmailModule],
  providers: [ContactsService],
  exports: [ContactsService],
})
export class ContactModule {}
