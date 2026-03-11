"use client";
import { useState } from "react";
import { PageContainer } from "../layout/PageContainer";
import { NavigationLayout } from "../layout/NavigationLayout";
import { PageTitle } from "../layout/PageTitle";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { useCart } from "@/context/CartContext";
import { useCartTotals } from "@/hooks/useCartTotals";
import { BankTransferDetails } from "./BankTransferDetails";
import { CheckoutForm } from "./CheckoutForm";
import checkout from "@/assets/checkout.webp";
import { AvatarRound } from "../layout/AvatarRound";

export function CheckoutPage() {
  const buttons = useDefaultNavButtons();
  const { state } = useCart();
  const { subtotal } = useCartTotals();
  const [completed, setCompleted] = useState(false);

  if (completed) return <BankTransferDetails />;

  return (
    <PageContainer maxWidth="md">
      <NavigationLayout buttons={buttons} />
      <PageTitle title="¡Compra Realizada!" />
      <div className="space-y-8 text-center">
        <AvatarRound
          src={checkout.src}
          fallback="Checkout"
          className="mx-auto h-26 w-26"
        />
        <CheckoutForm
          items={state.items}
          subtotal={subtotal}
          onCompleted={() => setCompleted(true)}
        />
      </div>
    </PageContainer>
  );
}
