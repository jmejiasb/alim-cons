import { notFound } from "next/navigation";
import { EbookDetailPage } from "@/components/ebooks/EbookDetailPage";
import { getEbookById } from "@/repositories/ebookRepository";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EbookPageById({ params }: PageProps) {
  const { id } = await params;

  const ebook = await getEbookById(id);

  if (!ebook) notFound();

  return (
    <>
      <EbookDetailPage ebook={ebook} />;
    </>
  );
}
