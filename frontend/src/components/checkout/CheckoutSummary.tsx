import type { CartItem } from "@/types/cart";
import { Button } from "../ui/button";
import { formatCLP } from "@/utils/formatClp";

interface CheckoutSummaryProps {
  items: CartItem[];
  subtotal: number;
  loading: boolean;
  disabled: boolean;
  onSubmit: () => void;
}

export function CheckoutSummary({
  items,
  subtotal,
  loading,
  disabled,
  onSubmit,
}: CheckoutSummaryProps) {
  return (
    <div className="rounded-lg border p-6 space-y-4 bg-card">
      <h2 className="font-semibold text-lg">Resumen</h2>
      {items.map((item) => (
        <div key={item.ebook.id} className="flex justify-between text-sm">
          <span>{item.ebook.title}</span>
          <span>${item.ebook.salesPrice ?? item.ebook.regularPrice}</span>
        </div>
      ))}
      <div className="flex justify-between font-semibold border-t pt-4">
        <span>Subtotal</span>
        <span>{formatCLP(subtotal)}</span>
      </div>
      <Button
        className="w-full cursor-pointer"
        size="lg"
        onClick={onSubmit}
        disabled={disabled || loading}
      >
        {loading ? "Procesando..." : "Confirmar Compra"}
      </Button>
    </div>
  );
}
