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
import Image from "next/image";
import checkout from "@/assets/checkout.webp";

export function CheckoutPage() {
  const buttons = useDefaultNavButtons();
  const { state } = useCart();
  const { subtotal } = useCartTotals();
  const [completed, setCompleted] = useState(false);

  if (completed) return <BankTransferDetails />;

  return (
    <PageContainer maxWidth="md">
      <NavigationLayout buttons={buttons} />

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <PageTitle title="Checkout" />
          <CheckoutForm
            items={state.items}
            subtotal={subtotal}
            onCompleted={() => setCompleted(true)}
          />
        </div>
        <div className="relative hidden md:block aspect-2/3 w-full h-full">
          <Image
            fill
            src={checkout.src}
            alt={"Checkout"}
            className="rounded-lg object-contain"
          />
        </div>
      </div>
    </PageContainer>
  );
}
