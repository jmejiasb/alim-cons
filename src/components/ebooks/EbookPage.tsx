"use client";

import { PageContainer } from "../layout/PageContainer";
import { EbookCard } from "./EbookCard";
import type { Ebook } from "@/types/ebook";
import { NavigationLayout } from "../layout/NavigationLayout";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { PageTitle } from "../layout/PageTitle";
import { useCartActions } from "@/hooks/useCartActions";

interface EbookPageProps {
  ebooks: readonly Ebook[];
}

export function EbookPage({ ebooks }: EbookPageProps) {

  const buttons = useDefaultNavButtons();

  const { addItem } = useCartActions();

  return (
    <PageContainer maxWidth="xl">
      <NavigationLayout buttons={buttons} />
      {/* <div className="flex flex-col items-start ml-auto mb-10">
        <ThemeToggle />
      </div> */}
      <PageTitle 
        title="Mis Ebooks"
      /> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
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
