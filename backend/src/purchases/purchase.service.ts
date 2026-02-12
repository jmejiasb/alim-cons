import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from './purchase.entity';
import { Repository } from 'typeorm';
import { PurchaseStatus } from './purchase-status.enum';
import { CreatePurchaseInput } from './dto/create-purchase.input';
import { EbooksService } from 'src/ebooks/ebooks.service';
import { PurchaseItem } from './purchase-item.entity';
import { UpdatePurchaseInput } from './dto/update-purchase.input';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(Purchase)
    private readonly repo: Repository<Purchase>,
    private readonly ebooksService: EbooksService,
    @InjectRepository(PurchaseItem)
    private readonly purchaseItemRepo: Repository<PurchaseItem>,
  ) {}

  findAll(): Promise<Purchase[]> {
    return this.repo.find();
  }

  async create(input: CreatePurchaseInput): Promise<Purchase> {
    const items = await Promise.all(
      input.items.map(async ({ ebookId }) => {
        const ebook = await this.ebooksService.findByIdOrFail(ebookId);

        const item = this.purchaseItemRepo.create({
          ebook,
          priceAtPurchase: ebook.salesPrice ?? ebook.regularPrice,
        });

        return item;
      }),
    );

    const purchase = this.repo.create({ ...input, items });
    return this.repo.save(purchase);
  }

  findByStatus(status: PurchaseStatus): Promise<Purchase[]> {
    return this.repo.find({
      where: { status },
    });
  }

  async findByIdOrFail(id: string): Promise<Purchase> {
    const purchase = await this.repo.findOne({ where: { id } });
    if (!purchase) throw new NotFoundException('Purchase not found');
    return purchase;
  }

  async update(input: UpdatePurchaseInput): Promise<Purchase> {
    const { id, ...data } = input;

    const purchase = await this.findByIdOrFail(id);

    Object.assign(purchase, data);

    return this.repo.save(purchase);
  }
}
