import { Module } from '@nestjs/common';
import { ContactsService } from './contact.service';
import { EmailModule } from 'src/common/email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contact.entity';
import { ContactResolvers } from './contact.resolver';
@Module({
  imports: [TypeOrmModule.forFeature([Contact]), EmailModule],
  providers: [ContactResolvers, ContactsService],
  exports: [ContactsService],
})
export class ContactModule {}
