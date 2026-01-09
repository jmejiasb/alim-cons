import { useCart } from "@/context/CartContext";

export function useCartTotals() {
  const { state } = useCart();

  const subtotal = state.items.reduce((sum, item) => {
    const price = item.ebook.salesPrice ?? item.ebook.regularPrice;
    return sum + price;
  }, 0);

  const itemCount = state.items.length;

  return { subtotal, itemCount };
}