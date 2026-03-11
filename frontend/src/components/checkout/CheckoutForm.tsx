import { useCheckout } from "@/hooks/useCheckout";
import { CartItem } from "@/types/cart";
import { CheckoutContact } from "./CheckoutContact";
import { CheckoutSummary } from "./CheckoutSummary";

export interface CheckoutFormProps {
  items: CartItem[];
  subtotal: number;
  onCompleted: () => void;
}

export function CheckoutForm({
  items,
  subtotal,
  onCompleted,
}: CheckoutFormProps) {
  const { name, email, setName, setEmail, loading, createPurchase } =
    useCheckout();

  const handleSubmit = async () => {
    const ok = await createPurchase();
    if (ok) onCompleted();
  };

  const isDisabled = loading || !name || !email;

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <CheckoutContact
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
      />

      <CheckoutSummary
        items={items}
        subtotal={subtotal}
        loading={loading}
        disabled={isDisabled}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
