import { useDarkMode } from "../hooks/themes";
import { Button } from "./buttons";
function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();
  console.log(theme);
  return (
    <div className="text-center flex items-center justify-center">
      <Button
        onClick={toggleTheme}
        text={theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      />
    </div>
  );
}

export default ThemeToggle;
