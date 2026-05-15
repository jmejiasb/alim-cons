import type { CartItem } from "@/types/cart";
import { formatCLP } from "@/utils/formatClp";
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
