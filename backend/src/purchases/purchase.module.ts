import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './purchase.entity';
import { PurchaseItem } from './purchase-item.entity';
import { EbooksModule } from 'src/ebooks/ebooks.module';
import { PurchasesService } from './purchase.service';
import { PurchasesResolver } from './purchase.resolver';
import { EmailModule } from 'src/common/email/email.module';
import { StorageModule } from 'src/common/storage/storage.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Purchase, PurchaseItem]),
    EbooksModule,
    StorageModule,
    EmailModule,
  ],
  providers: [PurchasesService, PurchasesResolver],
})
export class PurchasesModule {}
