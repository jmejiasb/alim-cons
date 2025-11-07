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
  const shadowBg = inverted
    ? "bg-emerald-600 hover:bg-emerald-700 dark:bg-blue-900 dark:hover:bg-blue-950"
    : "bg-gray-400 hover:bg-gray-500 dark:bg-slate-700 dark:hover:bg-slate-800";

  const btnBg = inverted
    ? "bg-gray-200 hover:bg-gray-300 text-emerald-600 dark:bg-slate-700 dark:hover:bg-slate-800 dark:text-blue-600"
    : "bg-emerald-500 hover:bg-emerald-600 text-gray-200 dark:bg-blue-900 dark:hover:bg-blue-950";

  return (
    <div className="inline-block relative group w-9/10">
      <div
        className={cn(
          "absolute inset-0 rounded-lg translate-x-1 translate-y-1",
          "group-hover:translate-x-0 group-hover:translate-y-0",
          "transition-transform",
          
          shadowBg
        )}
      />
      <Button
        asChild
        className={cn(
          "relative px-8 py-2.5 uppercase tracking-wider rounded-lg w-full",
          "transition-colors",
          btnBg
        )}
      >
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
}
