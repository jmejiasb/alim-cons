import { useCheckout } from "@/hooks/useCheckout";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CartItem } from "@/types/cart";

export interface CheckoutFormProps {
  items: CartItem[];
  subtotal: number;
  onCompleted: () => void;
}

export function CheckoutForm({ items, subtotal, onCompleted }: CheckoutFormProps) {

  const { name, email, setName, setEmail, loading, createPurchase} = useCheckout();

  const handleSubmit = async () => {
    const ok = await createPurchase();
    if (ok) onCompleted();
  };

  return (
    <div className="mt-10 space-y-8">
      <div className="rounded-lg border p-6 space-y-4">
        <h2 className="font-semibold">Datos de contacto</h2>
        <Input
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="rounded-lg border p-6 space-y-4">
        <h2 className="font-semibold">Resumen</h2>
        {items.map((item) => (
          <div key={item.ebook.id} className="flex justify-between text-sm">
            <span>{item.ebook.title}</span>
            <span>${item.ebook.salesPrice ?? item.ebook.regularPrice}</span>
          </div>
        ))}
        <div className="flex justify-between font-semibold border-t pt-4">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <Button
          className="w-full cursor-pointer"
          size="lg"
          onClick={handleSubmit}
          disabled={loading || !name || !email}
        >
          {loading ? "Procesando..." : "Confirmar Compra"}
        </Button>
      </div>
    </div>
  );
}
