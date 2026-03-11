"use client";

import Image from "next/image";
import { PageContainer } from "../layout/PageContainer";
import type { Ebook } from "@/types/ebook";
import { NavigationLayout } from "../layout/NavigationLayout";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { Price } from "../ui/Price";

interface EbookDetailPageProps {
  ebook: Ebook;
}

export function EbookDetailPage({ ebook }: EbookDetailPageProps) {
  const buttons = useDefaultNavButtons();

  return (
    <PageContainer maxWidth="lg">
      <NavigationLayout buttons={buttons} />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="relative aspect-2/3 w-full overflow-hidden rounded-2xl border border-border bg-card">
          <Image
            fill
            src={ebook.imgUrl}
            alt={ebook.title}
            className="w-full rounded-lg object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{ebook.title}</h1>

          <Price
            regularPrice={ebook.regularPrice}
            salesPrice={ebook.salesPrice}
            className="text-2xl"
          />
        </div>
      </div>
    </PageContainer>
  );
}
