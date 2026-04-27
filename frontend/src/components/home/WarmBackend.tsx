"use client";

import { useEffect } from "react";

export function WarmBackend() {
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`, {
      cache: "no-store",
    }).catch(() => undefined);
  }, []);
  return null;
}
