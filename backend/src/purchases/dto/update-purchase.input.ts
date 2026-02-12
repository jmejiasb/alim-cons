import { InputType, Field } from '@nestjs/graphql';
import { IsUUID, IsEnum, IsOptional, IsString } from 'class-validator';
import { PurchaseStatus } from '../purchase-status.enum';

@InputType()
export class UpdatePurchaseInput {
  @Field()
  @IsUUID()
  id: string;

  @Field(() => PurchaseStatus, { nullable: true })
  @IsEnum(PurchaseStatus)
  @IsOptional()
  status?: PurchaseStatus;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  notes?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  paymentProof?: string;
}
