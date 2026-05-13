export function toUsd(clpPrice: number, usdRate: number) {
  return clpPrice / usdRate;
}