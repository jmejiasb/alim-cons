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
import { AvatarDisplay } from "../ui/AvatarDisplay";

export function CheckoutPage() {
  const buttons = useDefaultNavButtons();
  const { state } = useCart();
  const { subtotal } = useCartTotals();
  const [completed, setCompleted] = useState(false);

  if (completed) return <BankTransferDetails />;

  return (
    <PageContainer maxWidth="md">
      <NavigationLayout buttons={buttons} />
      <div className="space-y-6 text-center">
        <AvatarDisplay
          src={checkout.src}
          fallback="Checkout"
          className="mx-auto w-44 h-44 p-3"
          fit="cover"
          rounded
        />
        <PageTitle title="¡Compra Realizada!"/>
        <CheckoutForm
          items={state.items}
          subtotal={subtotal}
          onCompleted={() => setCompleted(true)}
        />
      </div>
    </PageContainer>
  );
}
