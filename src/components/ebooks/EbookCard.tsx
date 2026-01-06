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
    <Link href={`/ebooks/${id}`}>
      <Card className="rounded-xl border-0 bg-green-100 hover:bg-green-200 hover:transform-view dark:bg-slate-700 dark:hover:bg-slate-800 cursor-pointer ">
        <CardContent className="flex flex-col h-full">
          <div className="flex justify-center align-top">
            <Image alt={title} src={imgUrl} width={150} height={300} />
          </div>

          <div className="flex flex-col flex-1 justify-between mt-4">
            <CardTitle className="text-md font-semibold leading-tight">
              {title}
            </CardTitle>

            <CardDescription className="mt-2 text-gray-700 dark:text-gray-300">
              <div className="flex justify-between items-center">
                $
                {salesPrice > 0
                  ? salesPrice?.toFixed(2)
                  : regularPrice.toFixed(2)}
                <IconButton
                  variant="ghost"
                  size="icon-lg"
                  icon={<CirclePlus />}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onClick?.();
                  }}
                  ariaLabel="Agregar a Carrito"
                  className="hover:bg-green-500 hover:text-white dark:hover:bg-slate-700 rounded-4xl"
                />
              </div>
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
