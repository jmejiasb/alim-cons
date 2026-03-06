"use client";
import { useState } from "react";
import { PageContainer } from "../layout/PageContainer";
import { NavigationLayout } from "../layout/NavigationLayout";
import { PageTitle } from "../layout/PageTitle";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { useCart } from "@/context/CartContext";
import { useCartTotals } from "@/hooks/useCartTotals";
import { createPurchase } from "@/repositories/purchaseRepository";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { CreatePurchaseInput } from "@/types/purchase";
import { BankTransferDetails } from "./BankTransferDetails";
import { CartItem } from "@/types/cart";

export function CheckoutPage() {
  const buttons = useDefaultNavButtons();
  const { state } = useCart();
  const { subtotal } = useCartTotals();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const input: CreatePurchaseInput = {
        name,
        email,
        items: state.items?.map((i: CartItem) => ({ ebookId: i.ebook.id })),
      };
      await createPurchase(input);
      setCompleted(true);
    } finally {
      setLoading(false);
    }
  };

  if (completed) return <BankTransferDetails />;

  return (
    <PageContainer maxWidth="md">
      <NavigationLayout buttons={buttons} />
      <PageTitle title="Checkout" />
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
          {state.items.map((item) => (
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
    </PageContainer>
  );
}
