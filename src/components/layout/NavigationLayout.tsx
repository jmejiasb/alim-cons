"use client"

import { NavigationIconButtons, type NavIconButton } from "../ui/NavigationIconButtons"
import { ThemeToggle } from "./ThemeToggle"

interface NavigationLayoutProps {
  buttons: NavIconButton[]
}

export function NavigationLayout({ buttons }: NavigationLayoutProps) {
  return (
    <div className="flex w-full items-center justify-between mb-8">
      <NavigationIconButtons buttons={buttons} />
      <ThemeToggle />
    </div>
  )
}
