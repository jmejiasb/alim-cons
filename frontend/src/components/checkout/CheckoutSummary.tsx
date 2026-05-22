import { useCurrency } from "@/context/CurrencyContext";
import type { CartItem } from "@/types/cart";
import { formatCLP } from "@/utils/formatClp";
import { formatUsd } from "@/utils/formatUsd";
import { Button } from "../ui/button";

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
	const { usdRate } = useCurrency();

	const formattedUsdSubtotal = usdRate ? formatUsd(subtotal / usdRate) : null;

	return (
		<div className="rounded-lg border p-6 space-y-4 bg-card">
			<h2 className="font-semibold text-lg">Resumen</h2>
			{items.map((item) => {
				const hasSale = (item.ebook.salesPrice ?? 0) > 0;
				const price = hasSale
					? (item.ebook.salesPrice ?? 0)
					: item.ebook.regularPrice;

				return (
					<div
						key={item.ebook.id}
						className="flex text-left justify-between text-sm"
					>
						<span>{item.ebook.title}</span>
						<span>{formatCLP(price)}</span>
					</div>
				);
			})}
			<div className="space-y-1 border-t pt-4">
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
