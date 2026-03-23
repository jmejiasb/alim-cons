import { EbookPage } from "@/components/ebooks/EbookPage";
import { getEbooks } from "@/repositories/ebookRepository";

export const dynamic = "force-dynamic";

export default async function Ebooks() {
	const ebooks = await getEbooks();

	return <EbookPage ebooks={ebooks} />;
}
