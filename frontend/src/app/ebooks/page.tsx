import { getEbooks } from "@/repositories/ebookRepository";
import { EbookPage } from "@/components/ebooks/EbookPage";

export default async function Ebooks() {
  const ebooks = await getEbooks();

  return <EbookPage ebooks={ebooks} />;
}
