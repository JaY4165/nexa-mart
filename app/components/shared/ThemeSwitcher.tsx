"use client";

import { cn } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === "dark" ? (
        <Sun
          size={24}
          onClick={() => setTheme("light")}
          className="cursor-pointer hover:animate-appearance-in hover:fill-orange-500 hover:text-orange-500 hover:transition-all hover:duration-500 hover:ease-in-out"
        />
      ) : (
        <Moon
          size={24}
          onClick={() => setTheme("dark")}
          className="cursor-pointer hover:animate-appearance-in hover:fill-yellow-300 hover:text-yellow-300 hover:transition-all hover:duration-500 hover:ease-in-out"
        />
      )}
    </>
  );
}
