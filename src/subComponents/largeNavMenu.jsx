import { NavButton } from "./buttons";

function LargeNavMenu() {
  return (
    <div className="hidden md:flex space-x-8 items-center justify-center">
      <a
        href="#home"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
      >
        Home
      </a>
      <a
        href="#about"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
      >
        About
      </a>
      <a
        href="#skills"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
      >
        Skills
      </a>
      <a
        href="#contact"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
      >
        Contact
      </a>
      <NavButton />
    </div>
  );
}

export default LargeNavMenu;
