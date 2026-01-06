"use client";

import { PageContainer } from "../layout/PageContainer";
import { EbookCard } from "./EbookCard";
import type { Ebook } from "@/types/ebook";
import { createDefaultNavigationButtons } from "../layout/createDefaultNavButtons";
import { NavigationLayout } from "../layout/NavigationLayout";
import { useRouter } from "next/navigation";

interface EbookPageProps {
  ebooks: readonly Ebook[];
}

export function EbookPage({ ebooks }: EbookPageProps) {

  const router = useRouter();

  const buttons = createDefaultNavigationButtons({
    onBack: () => router.back(),
    onCart: () => {},
  });

  return (
    <PageContainer maxWidth="xl">
      <NavigationLayout buttons={buttons} />
      {/* <div className="flex flex-col items-start ml-auto mb-10">
        <ThemeToggle />
      </div> */}
      <h1 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-emerald-800 dark:text-zinc-50 mr-auto mb-10">
        Mis Ebooks
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
        {ebooks?.map((ebook) => (
          <EbookCard
            key={ebook.id}
            id={ebook.id}
            title={ebook.title}
            imgUrl={ebook.imgUrl}
            regularPrice={ebook.regularPrice}
            salesPrice={ebook.salesPrice ?? 0}
            onClick={() => {}}
          />
        ))}
      </div>
    </PageContainer>
  );
}
