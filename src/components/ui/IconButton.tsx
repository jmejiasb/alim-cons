import { Button } from "./button"
import type { ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<typeof Button>

export interface IconButtonProps
  extends Omit<ButtonProps, "children"> {
  icon: React.ReactNode
  ariaLabel: string
}

export function IconButton({ 
  icon,
  ariaLabel,
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
      className={className || ""}
      {...props}
    >
      {icon}
    </Button>
  )
}