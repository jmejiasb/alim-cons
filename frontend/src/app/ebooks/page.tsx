import { EbookPage } from "@/components/ebooks/EbookPage";
import { getEbooks } from "@/repositories/ebookRepository";

export default async function Ebooks() {
  const ebooks = await getEbooks();

  return <EbookPage ebooks={ebooks} />;
}
