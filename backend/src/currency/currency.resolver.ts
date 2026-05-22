import { Resolver } from "@nestjs/graphql";
import { CurrencyService } from "./currency.service";
import { Query, Float } from "@nestjs/graphql";

@Resolver()
export class CurrencyResolver {
  constructor(private readonly currencyService: CurrencyService) {}

  @Query(() => Float)
  usdRate(): Promise<number> {
    return this.currencyService.getUsdRate();
  }
}