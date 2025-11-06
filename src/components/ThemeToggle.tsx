"use client";

import { Moon, Sun} from "lucide-react";
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button 
      variant="ghost" 
      size="icon-lg"
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="hover:bg-emerald-200 dark:hover:bg-slate-700"
    >
      <Sun className= "h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 bg" />
      <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 dark:s" />
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
}