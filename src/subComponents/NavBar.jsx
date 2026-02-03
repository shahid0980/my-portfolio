import { useState } from "react";
import LargeNavMenu from "./largeNavMenu";
import { MobileMenu } from "./MobileMenu";
import ThemeToggle from "./ThemesToggle";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState("hidden");

  function handleClick() {
    setIsMenuOpen(isMenuOpen === "hidden" ? "block" : "hidden");
  }
  return (
    <nav className="bg-white font-semibold dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* bg-linear-to-r from-blue-100 to-blue-400 text-transparent bg-clip-text */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold  ">Shahid Khan</h1>
          </div>

          <LargeNavMenu />

          <div className="md:hidden flex items-center ">
            <button
              onClick={handleClick}
              className="text-gray-700 dark:text-gray-300 outline-none px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg
                id="menu-icon"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isMenuOpen} md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-300`}
      >
        <MobileMenu />
      </div>
    </nav>
  );
}

export default NavBar;
