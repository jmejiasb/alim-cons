'use client';

import { useCart } from '@/context/CartContext';
import { useCartActions } from '@/hooks/useCartActions';
import { useCartTotals } from '@/hooks/useCartTotals';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { CartItem } from './CartItem';
import { CartEmpty } from './CartEmpty';

export function CartDrawer() {
  const { state } = useCart();
  const { closeDrawer } = useCartActions();
  const { subtotal, itemCount } = useCartTotals();

  return (
    <Sheet open={state.isOpen} onOpenChange={closeDrawer}>
      <SheetContent className="flex flex-col w-full bg-linear-to-t from-emerald-200 to-emerald-50 dark:bg-linear-to-t dark:from-slate-800 dark:to-black sm:max-w-lg p-8">
        <SheetHeader>
          <SheetTitle>Carrito ({itemCount})</SheetTitle>
        </SheetHeader>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {state.items.length === 0 ? (
            <CartEmpty />
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <CartItem key={item.ebook.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t pt-4 space-y-4">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Button className="w-full" size="lg">
              Finalizar Compra
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}