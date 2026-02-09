import { useCart } from "@/context/CartContext";
import type { Ebook } from "@/types/ebook";

export function useCartActions() {
  const { dispatch } = useCart();

  return {
    addItem: (ebook: Ebook) => dispatch({ type: "ADD_ITEM", payload: ebook }),
    removeItem: (ebookId: string) =>
      dispatch({ type: "REMOVE_ITEM", payload: ebookId }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
    toggleDrawer: () => dispatch({ type: "TOGGLE_DRAWER"}),
    openDrawer: () => {
      dispatch({ type: "SET_DRAWER", payload: true });
    },
    closeDrawer: () => dispatch({ type: "SET_DRAWER", payload: false }),
  };
}
