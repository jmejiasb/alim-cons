import { ArrowBigLeft, ShoppingCart } from "lucide-react"
import { NavIconButton } from "../ui/NavigationIconButtons"

export function createDefaultNavigationButtons(
  actions: {
    onBack: () => void
    onCart: () => void
  }
): NavIconButton[] {
  return [
    {
      id: "back",
      icon: <ArrowBigLeft />,
      ariaLabel: "Volver",
      className: "hover:bg-emerald-200 dark:hover:bg-slate-700",
      onClick: actions.onBack,
    },
    {
      id: "cart",
      icon: <ShoppingCart />,
      ariaLabel: "Carrito",
      className: "hover:bg-emerald-200 dark:hover:bg-slate-700",
      onClick: actions.onCart,
    },
  ]
}