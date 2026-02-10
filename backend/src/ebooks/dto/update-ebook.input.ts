import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateEbookInput } from './create-ebook.input';

@InputType()
export class UpdateEbookInput extends PartialType(CreateEbookInput) {
  @Field(() => ID)
  id: string;
}
