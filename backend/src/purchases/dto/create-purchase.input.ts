import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PurchaseStatus } from '../purchase-status.enum';

@InputType()
export class PurchaseItemInput {
  @Field()
  @IsNotEmpty()
  ebookId: string;
}

@InputType()
export class CreatePurchaseInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsArray()
  @ValidateNested({ each: true })
  items: PurchaseItemInput[];

  @Field(() => PurchaseStatus)
  @IsEnum({
    type: 'enum',
    enum: PurchaseStatus,
    default: PurchaseStatus.PENDING_VERIFICATION,
  })
  status: PurchaseStatus;

  @Field({ nullable: true })
  @IsString()
  paymentProof?: string;

  @Field({ nullable: true })
  @IsString()
  notes?: string;
}
