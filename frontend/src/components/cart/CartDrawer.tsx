"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { useCartContext } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { useCartActions } from "@/hooks/useCartActions";
import { useCartTotals } from "@/hooks/useCartTotals";
import { formatCLP } from "@/utils/formatClp";
import { formatUsd } from "@/utils/formatUsd";
import { CartEmpty } from "./CartEmpty";
import { CartItem } from "./CartItem";

export function CartDrawer() {
	const router = useRouter();
	const { state } = useCartContext();
	const { closeDrawer } = useCartActions();
	const { subtotal, itemCount } = useCartTotals();
	const { usdRate } = useCurrency();

	function handleCheckout() {
		closeDrawer();
		router.push("/checkout");
	}

	function handleEmptyCartClick() {
		closeDrawer();
	}

	const formattedUsdSubtotal = usdRate ? formatUsd(subtotal / usdRate) : null;

	return (
		<Sheet open={state.isOpen} onOpenChange={closeDrawer}>
			<SheetContent className="flex flex-col w-full bg-linear-to-t from-card to-muted sm:max-w-lg p-8">
				<SheetHeader>
					<SheetTitle>Carrito ({itemCount})</SheetTitle>
				</SheetHeader>

				{/* Cart Items */}
				<div className="flex-1 overflow-y-auto py-4">
					{state.items.length === 0 ? (
						<CartEmpty onClick={handleEmptyCartClick} />
					) : (
						<div className="space-y-4">
							{state.items.map((item) => (
								<CartItem key={item.ebook.id} item={item} />
							))}
						</div>
					)}
				</div>

				{/* Footer */}
				{state.items.length > 0 && (
					<div className="border-t pt-4 space-y-4">
						<div className="space-y-1">
							<div className="flex items-center justify-between text-lg font-semibold">
								<span>Subtotal</span>
								<span className="text-primary ">{formatCLP(subtotal)}</span>
							</div>
							{formattedUsdSubtotal && (
								<div className="flex items-center justify-between text-sm text-muted-foreground">
									<span></span>
									<span>US{formattedUsdSubtotal}</span>
								</div>
							)}
						</div>

						<Button
							className="w-full"
							size="lg"
							onClick={() => handleCheckout()}
						>
							Finalizar Compra
						</Button>
					</div>
				)}
			</SheetContent>
		</Sheet>
	);
}
