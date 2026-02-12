import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './purchase.entity';
import { PurchaseItem } from './purchase-item.entity';
import { EbooksModule } from 'src/ebooks/ebooks.module';
import { PurchasesService } from './purchase.service';
import { PurchasesResolver } from './purchase.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Purchase, PurchaseItem]), EbooksModule],
  providers: [PurchasesService, PurchasesResolver],
})
export class PurchasesModule {}
