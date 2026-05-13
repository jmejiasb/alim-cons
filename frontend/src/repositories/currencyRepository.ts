import { gqlClient } from "@/lib/graphql-client";
import { GET_USD_RATE } from "@/queries/currency";

export async function getUsdRate(): Promise<number> {
  const data = await gqlClient.request<{ usdRate: number }>(GET_USD_RATE);

  return data.usdRate;
}

export async function getOptionalUsdRate(): Promise<number | null> {
  try {
    return await getUsdRate();
  } catch (error) {
    console.error("Failed to fetch USD rate", error);
    return null;
  }
}
