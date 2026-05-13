import { Injectable } from "@nestjs/common";

@Injectable()
export class CurrencyService {
  private cachedRate: number | null = null;
  private cachedAt: number | null = null;

  async getUsdRate(): Promise<number> {
    const oneDay = 1000 * 60 * 60 * 24;

    if (
      this.cachedRate &&
      this.cachedAt &&
      Date.now() - this.cachedAt < oneDay
    ) {
      return this.cachedRate;
    }

    const response = await fetch('https://mindicador.cl/api/dolar');

    if (!response.ok) {
      throw new Error('Could not fetch dolar rate');
    }

    const data = await response.json();

    const rate = data.serie?.[0]?.valor;

    if (!rate) {
      throw new Error('Invalid dolar rate response');
    }

    this.cachedRate = rate;
    this.cachedAt = Date.now();

    return rate;
  }
}