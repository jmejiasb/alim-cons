"use client";

import Image from "next/image";
import { PageContainer } from "../layout/PageContainer";
import type { Ebook } from "@/types/ebook";
import { NavigationLayout } from "../layout/NavigationLayout";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";

interface EbookDetailPageProps {
  ebook: Ebook;
}

export function EbookDetailPage({ ebook }: EbookDetailPageProps) {
  const buttons = useDefaultNavButtons();

  return (
    <PageContainer maxWidth="lg">
      <NavigationLayout buttons={buttons} />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="relative aspect-2/3 w-full">
          <Image
            fill
            src={ebook.imgUrl}
            alt={ebook.title}
            className="w-full rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{ebook.title}</h1>

          <div className="text-lg font-medium text-emerald-700">
            ${ebook.salesPrice ?? ebook.regularPrice}
          </div>

          {ebook.salesPrice && (
            <div className="text-sm line-through text-muted-foreground">
              ${ebook.regularPrice}
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
