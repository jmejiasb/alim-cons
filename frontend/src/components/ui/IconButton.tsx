import { Button } from "./button";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = ComponentPropsWithoutRef<typeof Button>;

export interface IconButtonProps extends Omit<ButtonProps, "children"> {
  icon: ReactNode;
  ariaLabel: string;
  badge?: number;
}

export function IconButton({
  icon,
  ariaLabel,
  badge,
  variant = "ghost",
  size = "icon-lg",
  className,
  ...props
}: IconButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      aria-label={ariaLabel}
      className={`relative rounded-full hover:bg-transparent ${className ?? ""}`}
      {...props}
    >
      {icon}
      {badge && badge > 0 && (
        <span
          className="absolute -top-1 -right-1 flex 
        items-center justify-center min-w-4.5 h-4.5 
        rounded-full bg-primary text-primary-foreground text-[10px] 
        font-semibold leading-none ring-2 ring-background"
        >
          {badge > 99 ? "99+" : badge}
        </span>
      )}
    </Button>
  );
}
