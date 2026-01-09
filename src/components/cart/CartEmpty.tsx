import { ShoppingCart } from 'lucide-react';

export function CartEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
      <h3 className="font-semibold text-lg mb-2">El carrito esta vacio</h3>
      <p className="text-sm text-muted-foreground">
        Agrega algun libro para empezar
      </p>
    </div>
  );
}