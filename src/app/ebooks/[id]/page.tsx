import { notFound } from "next/navigation";
import { getEbookById } from "@/repositories/ebookRepository";
import { EbookDetailPage } from "@/components/ebooks/EbookDetailPage";

interface PageProps {
  params: { id: string };
}

export default async function EbookPageById({ params }: PageProps) {
  const ebook = await getEbookById(params.id);

  console.log(ebook)

  if (!ebook) notFound();

  return <EbookDetailPage ebook={ebook} />;
}
