import { EbookPage } from "@/components/ebooks/EbookPage";
import { getOptionalUsdRate } from "@/repositories/currencyRepository";
import { getEbooks } from "@/repositories/ebookRepository";

export default async function Ebooks() {
  const ebooks = await getEbooks();
  const usdRate = await getOptionalUsdRate();

  return <EbookPage ebooks={ebooks} usdRate={usdRate}/>;
}
