import { gqlClient } from "@/lib/graphql-client"
import { GET_EBOOKS, GET_EBOOK } from '@/queries/ebook'
import type { Ebook } from '@/types/ebook'

export async function getEbooks(): Promise<readonly Ebook[]> {
  const data = await gqlClient.request<{ebooks: Ebook[]}>(GET_EBOOKS);
  return data.ebooks
}

export async function getEbookById(id: string): Promise<Ebook | null> {
  const data = await gqlClient.request(GET_EBOOK, { id })
  return data.ebook ?? null
}