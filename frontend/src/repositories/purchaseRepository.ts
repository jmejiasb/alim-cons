import { gqlClient } from '@/lib/graphql-client'
import { CREATE_PURCHASE } from '@/queries/purchase'
import type { Purchase, CreatePurchaseInput } from '@/types/purchase'

export async function createPurchase(input: CreatePurchaseInput): Promise<Purchase> {
  const data = await gqlClient.request<{ createPurchase: Purchase }>(CREATE_PURCHASE, { input })
  return data.createPurchase
}