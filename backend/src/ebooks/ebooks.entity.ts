import { BaseEntity } from 'src/common/base.entity';
import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class Ebook extends BaseEntity {
  @Field()
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  desc?: string;

  @Field()
  @Column()
  url: string;

  @Field()
  @Column()
  imgUrl: string;

  @Field(() => Float)
  @Column('decimal', { precision: 10, scale: 2 })
  regularPrice: number;

  @Field(() => Float, { nullable: true })
  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  salesPrice?: number;
}
