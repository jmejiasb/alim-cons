import { InputType, Field, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUrl, IsInt, Min } from 'class-validator';

@InputType()
export class CreateEbookInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field({ nullable: true })
  @IsString()
  description?: string;

  @Field()
  @IsUrl()
  url: string;

  @Field()
  @IsUrl()
  imgUrl: string;

  @Field(() => Float)
  @IsInt()
  @Min(0)
  regularPrice: number;

  @Field(() => Float, { nullable: true })
  @IsInt()
  @Min(0)
  salesPrice?: number;
}
