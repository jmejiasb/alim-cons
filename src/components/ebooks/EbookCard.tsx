import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

export type EbookCardProps = {
  title: string;
  imgUrl: string;
  regularPrice: number;
  salesPrice?: number;
}

export function EbookCard ({title, imgUrl, regularPrice, salesPrice = 0}:EbookCardProps ) {
  return (
    <Card className="rounded-xl bg-emerald-400 hover:bg-emerald-500 dark:bg-slate-700 dark:hover:bg-slate-800">
      <CardContent className="flex flex-col h-full">
        <Image 
          alt={title} 
          src={imgUrl} 
          width={245}
          height={500}
        />
        <div className="flex flex-col flex-1 justify-between mt-4">
          <CardTitle className="text-lg font-semibold leading-tight">
            {title}
          </CardTitle>

          <CardDescription className="mt-2 text-gray-700 dark:text-gray-300">
            ${salesPrice > 0 ? salesPrice?.toFixed(2) : regularPrice.toFixed(2)}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}