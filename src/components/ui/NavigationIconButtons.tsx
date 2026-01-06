"use client";

import { IconButton, type IconButtonProps} from "./IconButton";

export type NavIconButton =
  Pick<IconButtonProps, "icon" | "ariaLabel" | "onClick" | "className" | "disabled"> & {
    id: string
  }

interface NavigationIconButtonsProps {
  buttons: NavIconButton[];
}

export function NavigationIconButtons({ buttons }: NavigationIconButtonsProps) {
  return (
    <nav role="navigation" className="flex w-full items-center justify-between">
      {buttons.map((btn) => (
        <IconButton
          key={btn.id}
          icon={btn.icon}
          ariaLabel={btn.ariaLabel}
          onClick={btn.onClick}
          disabled={btn.disabled}
          className={btn.className}
        />
      ))}
    </nav>
  );
}
