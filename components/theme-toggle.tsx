"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <Button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="bg-secondary/25 backdrop-blur rounded-full p-2"
      variant={"outline"}
    >
      {theme == "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
