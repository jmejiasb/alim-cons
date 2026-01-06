import { DEFAULT_EBOOKS } from "@/data/ebooks"
import type { Ebook } from "@/types/ebook"

export async function getEbooks(): Promise<readonly Ebook[]> {
  return DEFAULT_EBOOKS
}

export async function getEbookById(id: string): Promise<Ebook | null> {
  return DEFAULT_EBOOKS.find((ebook) => ebook.id === id) ?? null
}
