'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/cart';
import { useCartActions } from '@/hooks/useCartActions';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem } = useCartActions();
  const price = item.ebook.salesPrice ?? item.ebook.regularPrice;
  const hasDiscount = item.ebook.salesPrice && item.ebook.salesPrice < item.ebook.regularPrice;

  return (
    <div className="flex gap-4 p-3 rounded-lg relative bg-green-200 hover:bg-green-200">
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
        
        <div className="mt-2 flex items-center gap-2">
          <span className="font-bold">${price.toFixed(2)}</span>
          {hasDiscount && (
            <span className="text-xs text-muted-foreground line-through">
              ${item.ebook.regularPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-6 w-6 cursor-pointer"
        onClick={() => removeItem(item.ebook.id)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}