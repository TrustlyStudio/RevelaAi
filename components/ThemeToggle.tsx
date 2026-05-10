"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full flex items-center justify-center p-2 text-slate-400">
        <span className="w-4 h-4" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-slate-400 hover:bg-rose-50 hover:text-brand-magenta dark:hover:bg-slate-800 dark:hover:text-rose-400 hover:scale-110 active:scale-95 transition-all"
      aria-label="Theme umschalten"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 lg:w-5 lg:h-5" />
      ) : (
        <Moon className="w-4 h-4 lg:w-5 lg:h-5" />
      )}
    </button>
  );
}
