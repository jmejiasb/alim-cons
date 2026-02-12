import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Purchase } from './purchase.entity';
import { PurchasesService } from './purchase.service';
import { PurchaseStatus } from './purchase-status.enum';
import { CreatePurchaseInput } from './dto/create-purchase.input';
import { UpdatePurchaseInput } from './dto/update-purchase.input';

@Resolver(() => Purchase)
export class PurchasesResolver {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Query(() => [Purchase])
  purchases(): Promise<Purchase[]> {
    return this.purchasesService.findAll();
  }

  @Query(() => [Purchase])
  purchasesByStatus(
    @Args('status', { type: () => PurchaseStatus }) status: PurchaseStatus,
  ): Promise<Purchase[]> {
    return this.purchasesService.findByStatus(status);
  }

  @Query(() => Purchase)
  purchase(@Args('id') id: string): Promise<Purchase> {
    return this.purchasesService.findByIdOrFail(id);
  }

  @Mutation(() => Purchase)
  createPurchase(@Args('input') input: CreatePurchaseInput): Promise<Purchase> {
    return this.purchasesService.create(input);
  }

  @Mutation(() => Purchase)
  updatePurchase(@Args('input') input: UpdatePurchaseInput): Promise<Purchase> {
    return this.purchasesService.update(input);
  }
}
