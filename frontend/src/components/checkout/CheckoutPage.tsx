"use client";
import { useRouter } from "next/navigation";
import checkout from "@/assets/checkout.webp";
import { useCartContext } from "@/context/CartContext";
import { useCartTotals } from "@/hooks/useCartTotals";
import { useDefaultNavButtons } from "@/hooks/useDefaultNavButtons";
import { NavigationLayout } from "../layout/NavigationLayout";
import { PageContainer } from "../layout/PageContainer";
import { PageTitle } from "../layout/PageTitle";
import { AvatarDisplay } from "../ui/AvatarDisplay";
import { CheckoutForm } from "./CheckoutForm";
import { useCartActions } from "@/hooks/useCartActions";

export function CheckoutPage() {
	const router = useRouter();
	const buttons = useDefaultNavButtons();
	const { state } = useCartContext();
	const { clearCart } = useCartActions()
	const { subtotal } = useCartTotals();

	const handleComplete = (purchaseId: string) => {
		clearCart()
		router.push(`/checkout/success?id=${purchaseId}`);
	}

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
				<PageTitle title="¡Compra Realizada!" />
				<CheckoutForm
					items={state.items}
					subtotal={subtotal}
					onCompleted={handleComplete}
				/>
			</div>
		</PageContainer>
	);
}
