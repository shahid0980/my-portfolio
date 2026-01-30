import { useState } from "react";
import LargeNavMenu from "./largeNavMenu";
import { MobileMenu } from "./MobileMenu";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState("hidden");

  function handleClick() {
    setIsMenuOpen(isMenuOpen === "hidden" ? "block" : "hidden");
  }
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-gray-800">Shahid Khan</h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <LargeNavMenu />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={handleClick}
              className="text-gray-700 outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
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
        className={`${isMenuOpen} md:hidden bg-white border-b border-gray-200 shadow-lg`}
      >
        <MobileMenu />
      </div>
    </nav>
  );
}

export default NavBar;
