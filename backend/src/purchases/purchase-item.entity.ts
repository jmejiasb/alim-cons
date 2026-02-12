import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Entity, ManyToOne, Column } from 'typeorm';
import { Ebook } from 'src/ebooks/ebooks.entity';
import { Purchase } from './purchase.entity';
import { BaseEntity } from 'src/common/base.entity';

@ObjectType()
@Entity()
export class PurchaseItem extends BaseEntity {
  @Field(() => Ebook)
  @ManyToOne(() => Ebook, { eager: true })
  ebook: Ebook;

  @Field(() => Purchase)
  @ManyToOne(() => Purchase, (purchase) => purchase.items)
  purchase: Purchase;

  @Field(() => Float)
  @Column('decimal', { precision: 10, scale: 2 })
  priceAtPurchase: number; // snapshot the price at time of purchase
}
