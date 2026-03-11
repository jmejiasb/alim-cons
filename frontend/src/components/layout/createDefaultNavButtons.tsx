import { ArrowBigLeft, ShoppingCart } from "lucide-react";
import { NavIconButton } from "../ui/NavigationIconButtons";

export function createDefaultNavigationButtons(
  actions: {
    onBack: () => void;
    onCart: () => void;
  },
  cartItemCount?: number
): NavIconButton[] {

  const baseClass = "hover:bg-accent cursor-pointer";

  return [
    {
      id: "back",
      icon: <ArrowBigLeft />,
      ariaLabel: "Volver",
      className: baseClass,
      onClick: actions.onBack,
    },
    {
      id: "cart",
      icon: <ShoppingCart />,
      ariaLabel: "Carrito",
      className: baseClass,
      badge: cartItemCount || undefined,
      onClick: actions.onCart,
    },
  ];
}
