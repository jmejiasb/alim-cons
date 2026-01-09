import { Button } from "./button";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<typeof Button>;

export interface IconButtonProps extends Omit<ButtonProps, "children"> {
  icon: React.ReactNode;
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
      className={`relative ${className || ""}`}
      {...props}
    >
      {icon}
      {badge && badge > 0 && (
        <span className="absolute -top-0.5 -right-0.5 bg-emerald-700 text-primary-foreground text-[10px] rounded-full min-w-4.5 h-4.5 flex items-center justify-center font-semibold leading-none">
          {badge > 99 ? '99+' : badge}
        </span>
      )}
    </Button>
  );
}
