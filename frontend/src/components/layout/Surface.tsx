import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function Surface({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground border border-border rounded-xl shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
