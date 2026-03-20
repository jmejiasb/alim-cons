import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ContactsService } from './contact.service';
import { Contact } from './contact.entity';
import { CreateContactInput } from './dto/create-contact.input';

@Resolver(() => Contact)
export class ContactResolvers {
  constructor(private readonly service: ContactsService) {}

  @Query(() => [Contact])
  contacts() {
    return this.service.findAll();
  }

  @Mutation(() => Contact)
  createContact(@Args('input') input: CreateContactInput) {
    return this.service.create(input);
  }
}
