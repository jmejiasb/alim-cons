import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export function CartEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <ShoppingCart className="h-16 w-16 text-muted-foreground/70 mb-4 -translate-x-1 animate-pulse" />

      <h3 className="font-semibold text-lg mb-2">
        El carrito está vacío
      </h3>

      <p className="text-sm text-muted-foreground mb-6">
        Agrega algún libro para empezar
      </p>

      <Button asChild>
        <Link href="/ebooks">Ver ebooks</Link>
      </Button>
    </div>
  );
}