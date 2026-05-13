import { notFound } from "next/navigation";
import { EbookDetailPage } from "@/components/ebooks/EbookDetailPage";
import { getEbookById } from "@/repositories/ebookRepository";
import { getOptionalUsdRate } from "@/repositories/currencyRepository";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EbookPageById({ params }: PageProps) {
  const { id } = await params;

  const ebook = await getEbookById(id);
  const usdRate = await getOptionalUsdRate();

  if (!ebook) notFound();

  return (
    <>
      <EbookDetailPage ebook={ebook} usdRate={usdRate}/>;
    </>
  );
}
