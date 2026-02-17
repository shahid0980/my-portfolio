import { NavButton } from "./buttons";

export function MobileMenu() {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1 flex flex-row">
      <a
        href="#home"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Home
      </a>
      <a
        href="#about"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        About
      </a>
      <a
        href="#skills"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Skills
      </a>
      <a
        href="#contact"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Contact
      </a>

      <div className="flex-grow"></div>
      <NavButton />

    </div>
  );
}
