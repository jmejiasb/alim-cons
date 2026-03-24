import { notFound } from "next/navigation";
import { EbookDetailPage } from "@/components/ebooks/EbookDetailPage";
import { getEbookById } from "@/repositories/ebookRepository";

interface PageProps {
	params: { id: string };
}

export default async function EbookPageById({ params }: PageProps) {
	const { id } = params;

	const ebook = await getEbookById(id);

	if (!ebook) notFound();

	return <EbookDetailPage ebook={ebook} />;
}
