"use client";

import Image from "next/image";
import { CartItem as CartItemType } from "@/types/cart";
import { useCartActions } from "@/hooks/useCartActions";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Price } from "../ui/Price";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem } = useCartActions();

  return (
    <div className="flex gap-4 p-3 rounded-lg relative bg-card hover:bg-accent transition-colors">
      <div className="relative w-16 h-24 shrink-0">
        <Image
          src={item.ebook.imgUrl}
          alt={item.ebook.title}
          fill
          className="object-cover rounded"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm line-clamp-2 pr-6">
          {item.ebook.title}
        </h3>

        <div className="mt-2">
          <Price
            regularPrice={item.ebook.regularPrice}
            salesPrice={item.ebook.salesPrice}
          />
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-6 w-6 cursor-pointer hover:bg-accent"
        onClick={() => removeItem(item.ebook.id)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}
