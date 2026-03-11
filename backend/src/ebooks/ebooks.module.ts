import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ebook } from './ebooks.entity';
import { EbookResolvers } from './ebooks.resolver';
import { EbooksService } from './ebooks.service';
import { StorageModule } from 'src/common/storage/storage.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ebook]), StorageModule],
  controllers: [],
  providers: [EbookResolvers, EbooksService],
  exports: [EbooksService],
})
export class EbooksModule {}
