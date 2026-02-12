import { BaseEntity } from 'src/common/base.entity';
import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, OneToMany } from 'typeorm';
import { PurchaseStatus } from './purchase-status.enum';
import { PurchaseItem } from './purchase-item.entity';

@ObjectType()
@Entity()
export class Purchase extends BaseEntity {
  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field(() => [PurchaseItem])
  @OneToMany(() => PurchaseItem, (item) => item.purchase, { cascade: true })
  items: PurchaseItem[];

  @Field(() => PurchaseStatus)
  @Column({
    type: 'enum',
    enum: PurchaseStatus,
    default: PurchaseStatus.PENDING_VERIFICATION,
  })
  status: PurchaseStatus;

  @Field({ nullable: true })
  @Column({ nullable: true })
  paymentProof?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  notes?: string;
}
