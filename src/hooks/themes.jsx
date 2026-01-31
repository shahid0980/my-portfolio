import { useEffect, useState } from "react";

export function useDarkMode() {
  // Initialize state based on localStorage or system preference
  const [theme, setTheme] = useState(
    localStorage.theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save preference
    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}

//
