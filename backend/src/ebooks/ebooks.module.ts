import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ebook } from './ebooks.entity';
import { EbookResolvers } from './ebooks.resolver';
import { EbooksService } from './ebooks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ebook])],
  controllers: [],
  providers: [EbookResolvers, EbooksService],
  exports: [],
})
export class EbooksModule {}
