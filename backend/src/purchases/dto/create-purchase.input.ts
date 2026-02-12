import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

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

  @Field(() => [PurchaseItemInput])
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PurchaseItemInput)
  items: PurchaseItemInput[];

  @Field({ nullable: true })
  @IsString()
  paymentProof?: string;

  @Field({ nullable: true })
  @IsString()
  notes?: string;
}
