import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsEmail, IsOptional } from 'class-validator';

@InputType()
export class CreateContactInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  phone?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  message: string;
}
