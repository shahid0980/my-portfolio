import { NavButton } from "./buttons";

export function MobileMenu() {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1">
      <a
        href="#"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Home
      </a>
      <a
        href="#"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        About
      </a>
      <a
        href="#"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Skills
      </a>
      <a
        href="#"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Contact
      </a>
      <NavButton />
    </div>
  );
}
