import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import type { Ebook } from "@/types/ebook";
import Image from "next/image";
import Link from "next/link";
import { CirclePlus } from "lucide-react";
import { IconButton } from "../ui/IconButton";

export interface EbookCardProps extends Omit<Ebook, "desc" | "url"> {
  onClick: () => void;
}

export function EbookCard({
  id,
  title,
  imgUrl,
  regularPrice,
  salesPrice = 0,
  onClick,
}: EbookCardProps) {
  return (
    <Link href={`/ebooks/${id}`} className="block">
      <Card className="w-full max-w-60 overflow-hidden rounded-2xl border border-green-200 bg-green-100 transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-600 dark:bg-slate-700">
        <CardContent className="p-4 flex flex-col gap-3 h-full">
          <div className="relative w-full aspect-3/4 overflow-hidden rounded-xl">
            <Image src={imgUrl} alt={title} fill className="object-cover" />
          </div>

          <CardTitle className="mt-3 text-base font-semibold leading-tight line-clamp-2">
            {title}
          </CardTitle>

          <div className="flex items-center justify-between mt-auto pt-2">
            <CardDescription className="text-base font-semibold text-emerald-800 dark:text-slate-300">
              $
              {salesPrice > 0 ? salesPrice.toFixed(2) : regularPrice.toFixed(2)}
            </CardDescription>

            <IconButton
              variant="ghost"
              size="icon-lg"
              icon={<CirclePlus />}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick();
              }}
              className="rounded-full hover:bg-emerald-200/40 dark:hover:bg-slate-600"
              ariaLabel="Agregar a Carrito"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
