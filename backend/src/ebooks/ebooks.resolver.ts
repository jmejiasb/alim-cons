import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EbooksService } from './ebooks.service';
import { Ebook } from './ebooks.entity';
import { CreateEbookInput } from './dto/create-ebook.input';
import { UpdateEbookInput } from './dto/update-ebook.input';
import { UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from 'src/guards/api-key.guard';

@Resolver(() => Ebook)
export class EbookResolvers {
  constructor(private readonly service: EbooksService) {}

  @Query(() => [Ebook])
  ebooks() {
    return this.service.findAll();
  }

  @Query(() => Ebook, { nullable: true })
  ebook(@Args('id') id: string) {
    return this.service.findById(id);
  }

  @UseGuards(ApiKeyGuard)
  @Mutation(() => Ebook)
  createEbook(@Args('input') input: CreateEbookInput) {
    return this.service.create(input);
  }

  @UseGuards(ApiKeyGuard)
  @Mutation(() => Ebook)
  updateEbook(@Args('input') input: UpdateEbookInput) {
    return this.service.update(input);
  }
}
