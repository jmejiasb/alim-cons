import { useCartContext } from "@/context/CartContext";

export function useCartTotals() {
	const { state } = useCartContext();

	const subtotal = state.items.reduce((sum, item) => {
		const price =
			item.ebook.salesPrice && item.ebook.salesPrice > 0
				? item.ebook.salesPrice
				: item.ebook.regularPrice;
		return sum + price;
	}, 0);

	const itemCount = state.items.length;

	return { subtotal, itemCount };
}
