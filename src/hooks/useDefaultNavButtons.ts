"use client";

import { useRouter } from "next/navigation";
import { createDefaultNavigationButtons } from "@/components/layout/createDefaultNavButtons";
import { useCartActions } from "./useCartActions";
import { useCartTotals } from "./useCartTotals";

export function useDefaultNavButtons() {
  const router = useRouter();
  const { toggleDrawer } = useCartActions();
  const { itemCount } = useCartTotals();

  return createDefaultNavigationButtons(
    {
      onBack: () => router.back(),
      onCart: () => toggleDrawer(),
    },
    itemCount
  );
}
