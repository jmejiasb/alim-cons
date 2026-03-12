import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from './purchase.entity';
import { Repository } from 'typeorm';
import { PurchaseStatus } from './purchase-status.enum';
import {
  CreatePurchaseInput,
  PurchaseItemInput,
} from './dto/create-purchase.input';
import { EbooksService } from 'src/ebooks/ebooks.service';
import { PurchaseItem } from './purchase-item.entity';
import { UpdatePurchaseInput } from './dto/update-purchase.input';
import { EmailService } from 'src/common/email/email.service';
import { StorageService } from 'src/common/storage/storage.service';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(Purchase)
    private readonly repo: Repository<Purchase>,
    private readonly ebooksService: EbooksService,
    @InjectRepository(PurchaseItem)
    private readonly purchaseItemRepo: Repository<PurchaseItem>,
    private readonly emailService: EmailService,
    private readonly storageService: StorageService,
  ) {}

  findAll(): Promise<Purchase[]> {
    return this.repo.find({ relations: ['items', 'items.ebook'] });
  }

  async create(input: CreatePurchaseInput): Promise<Purchase> {
    const items = await this.buildPurchaseItems(input.items);

    const purchase = this.repo.create({ ...input, items });
    const savedPurchase = await this.repo.save(purchase);

    await this.sendPurchaseCreatedEmails(input, items);

    return savedPurchase;
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

    const purchase = await this.repo.findOne({
      where: { id },
      relations: ['items', 'items.ebook'],
    });

    if (!purchase) {
      throw new NotFoundException('Purchase not found');
    }

    const previousStatus = purchase.status;

    Object.assign(purchase, data);

    const updatedPurchase = await this.repo.save(purchase);

    if (
      previousStatus !== updatedPurchase.status &&
      updatedPurchase.status === PurchaseStatus.COMPLETED
    ) {
      await this.sendDownloadLinksEmail(updatedPurchase);
    }

    return updatedPurchase;
  }

  private async buildPurchaseItems(
    inputItems: PurchaseItemInput[],
  ): Promise<PurchaseItem[]> {
    return Promise.all(
      inputItems.map(async ({ ebookId }) => {
        const ebook = await this.ebooksService.findByIdOrFail(ebookId);

        return this.purchaseItemRepo.create({
          ebook,
          priceAtPurchase: ebook.salesPrice ?? ebook.regularPrice,
        });
      }),
    );
  }

  private async sendPurchaseCreatedEmails(
    input: CreatePurchaseInput,
    items: PurchaseItem[],
  ) {
    try {
      await Promise.all([
        this.emailService.sendPurchaseNotificationToAdmin(
          input.name,
          input.email,
          items,
        ),
        this.emailService.sendPurchaseConfirmationToCustomer(
          input.name,
          input.email,
        ),
      ]);
    } catch (error) {
      console.error('Failed to send purchase creation emails', error);
    }
  }

  private async sendDownloadLinksEmail(purchase: Purchase) {
  try {
    const downloads = await Promise.all(
      purchase.items.map(async (item) => {
        const url = await this.storageService.createSignedDownload(
          item.ebook.filePath,
        );

        return {
          title: item.ebook.title,
          url,
        };
      }),
    );

    await this.emailService.sendDownloadLinks(
      purchase.name,
      purchase.email,
      downloads,
    );
  } catch (error) {
    console.error('Failed to send download links email', error);
  }
}
}
