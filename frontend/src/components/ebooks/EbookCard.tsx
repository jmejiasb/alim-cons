import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import type { Ebook } from "@/types/ebook";
import Image from "next/image";
import Link from "next/link";
import { CirclePlus } from "lucide-react";
import { IconButton } from "../ui/IconButton";
import { Price } from "./Price";

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
      <Card
        className={`w-full max-w-60 overflow-hidden rounded-2xl border border-border 
        bg-card transition-all hover:-translate-y-1 hover:shadow-md`}
      >
        <CardContent className="p-4 flex flex-col gap-3 h-full">
          <div className="relative w-full aspect-3/4 overflow-hidden rounded-xl">
            <Image src={imgUrl} alt={title} fill className="object-cover" />
          </div>

          <CardTitle className="mt-3 font-semibold leading-tight line-clamp-2">
            {title}
          </CardTitle>

          <div className="flex items-center justify-between mt-auto pt-2">
            <Price
              regularPrice={regularPrice}
              salesPrice={salesPrice}
            />

            <IconButton
              variant="ghost"
              size="icon-lg"
              icon={<CirclePlus />}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick();
              }}
              className="rounded-full hover:bg-accent"
              ariaLabel="Agregar a Carrito"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
