"use client";

import { useRouter } from "next/navigation";
import { createDefaultNavigationButtons } from "@/components/layout/createDefaultNavButtons";

export function useDefaultNavButtons() {
  const router = useRouter();

  return createDefaultNavigationButtons({
    onBack: () => router.back(),
    onCart: () => {},
  });
}
