"use client";

import Image from "next/image";
import { PageContainer } from "../layout/PageContainer";
import { CirclePlus } from "lucide-react";
import type { Ebook } from "@/types/ebook";
import { NavigationLayout } from "../layout/NavigationLayout";
import { Button } from "../ui/button";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { Price } from "../ui/Price";
import { useCartActions } from "@/hooks/useCartActions";

interface EbookDetailPageProps {
  ebook: Ebook;
}

export function EbookDetailPage({ ebook }: EbookDetailPageProps) {
  const buttons = useDefaultNavButtons();
  const { addItem } = useCartActions();

  return (
    <PageContainer maxWidth="lg">
      <NavigationLayout buttons={buttons} />
      <div className="mt-5 grid items-start gap-6 md:grid-cols-2">
        <div className="relative aspect-2/3 rounded-2xl border border-border bg-card md:max-h-180">
          <Image
            fill
            src={ebook.imgUrl}
            alt={ebook.title}
            className="rounded-2xl object-cover md:max-h-180"
          />
        </div>

        <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
          <h1 className="text-2xl font-semibold my-5">{ebook.title}</h1>

          {ebook.desc && (
            <p className="text-sm leading-7 text-muted-foreground">
              {ebook.desc}
            </p>
          )}

          <div className="mt-auto flex flex-col gap-4 pt-6 sm:flex-row sm:items-end sm:justify-between">
            <Price
              regularPrice={ebook.regularPrice}
              salesPrice={ebook.salesPrice}
              className="text-2xl"
            />

            <Button
              onClick={() => addItem(ebook)}
              className="h-11 rounded-xl px-5 font-medium"
            >
              <CirclePlus className="mr-2 h-5 w-5" />
              Agregar al carrito
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
