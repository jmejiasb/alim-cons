import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface PageTitleProps extends ComponentProps<"h1"> {
  title: string;
}

export function PageTitle({ title, className, ...props }: PageTitleProps) {
  return (
    <h1
      className={cn(
        "mx-auto mb-10 max-w-xs text-center text-xl font-semibold tracking-tight text-primary",
        className
      )}
      {...props}
    >
      {title}
    </h1>
  );
}