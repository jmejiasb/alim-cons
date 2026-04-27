"use client"
import { EbookCardSkeleton } from "./EbookCardSkeleton";
import { NavigationLayout } from "../layout/NavigationLayout";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { PageContainer } from "../layout/PageContainer";
import { PageTitle } from "../layout/PageTitle";

export function EbookLoading() {
  const buttons = useDefaultNavButtons();
  return (
    <PageContainer maxWidth="xl">
      <NavigationLayout buttons={buttons} />

      {/* <div className="flex flex-col items-start ml-auto mb-10">
            <ThemeToggle />
          </div> */}
      <PageTitle title="Mis Ebooks" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-start">
        {Array.from({ length: 4 }).map((_, index) => (
          <EbookCardSkeleton key={index} />
        ))}
      </div>
    </PageContainer>
  );
}
