import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ContactsService } from './contact.service';
import { Contact } from './contact.entity';
import { CreateContactInput } from './dto/create-contact.input';

@Resolver(() => Contact)
export class EbookResolvers {
  constructor(private readonly service: ContactsService) {}

  @Query(() => [Contact])
  ebooks() {
    return this.service.findAll();
  }

  @Mutation(() => Contact)
  createEbook(@Args('input') input: CreateContactInput) {
    return this.service.create(input);
  }
}
