"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavButtonProps {
  href: string;
  label: string;
  inverted?: boolean;
}

export function NavButton({ href, label, inverted = false }: NavButtonProps) {
  const shadowBg = inverted ? "bg-primary/80" : "bg-primary/70";

  const btnBg = inverted
    ? "bg-card text-primary hover:bg-card/90"
    : "bg-primary text-primary-foreground hover:bg-primary/90";

  return (
    <div className="inline-block relative group w-[90%]">
      <div
        className={cn(
          "absolute inset-0 rounded-lg translate-x-1 translate-y-1 transition-transform",
          "group-hover:translate-x-0 group-hover:translate-y-0",
          shadowBg,
        )}
      />
      <Button
        asChild
        className={cn(
          "relative px-8 py-2.5 uppercase tracking-wider rounded-lg w-full transition-colors",
          btnBg,
        )}
      >
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
}
