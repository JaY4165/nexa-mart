"use client";

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
          className="cursor-pointer hover:fill-orange-500"

        />
      ) : (
        <Moon
          size={24}
          onClick={() => setTheme("dark")}
          className="cursor-pointer hover:fill-black"
        />
      )}
    </>
  );
}
