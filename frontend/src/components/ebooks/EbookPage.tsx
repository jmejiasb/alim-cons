"use client";

import { useCartActions } from "@/hooks/useCartActions";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import type { Ebook } from "@/types/ebook";
import { NavigationLayout } from "../layout/NavigationLayout";
import { PageContainer } from "../layout/PageContainer";
import { PageTitle } from "../layout/PageTitle";
import { EbookCard } from "./EbookCard";

interface EbookPageProps {
	ebooks: readonly Ebook[];
}

export function EbookPage({ ebooks }: EbookPageProps) {
	const buttons = useDefaultNavButtons();

	const { addItem } = useCartActions();

	return (
		<PageContainer maxWidth="xl">
			<NavigationLayout buttons={buttons} />
			<PageTitle title="Mis Ebooks" />
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-start">
				{ebooks?.map((ebook) => (
					<EbookCard
						key={ebook.id}
						id={ebook.id}
						title={ebook.title}
						imgUrl={ebook.imgUrl}
						regularPrice={ebook.regularPrice}
						salesPrice={ebook.salesPrice ?? 0}
						onClick={() => addItem(ebook)}
					/>
				))}
			</div>
		</PageContainer>
	);
}
