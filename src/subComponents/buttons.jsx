import { useDarkMode } from "../hooks/themes";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-[2px] text-white font-extrabold hover:text-gray-200 cursor-pointer"
    >
      <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></span>

      <span className="group-hover:bg-opacity-0 relative rounded-md bg-gray-900 dark:bg-gray-700 px-8 py-4 transition-all duration-300">
        {" "}
        {props.text}
      </span>
    </button>
  );
}

export function SmButton(props) {
  return (
    <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-[2px] text-white  hover:text-gray-200">
      <span class="absolute inset-0 h-full w-full bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

      <span className="group-hover:bg-opacity-0 relative rounded-md bg-gray-900 dark:bg-gray-700 px-8 py-2 transition-all duration-300">
        {" "}
        {props.text}
      </span>
    </button>
  );
}

export function NavButton() {
  let { theme, toggleTheme } = useDarkMode();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "shahidkhan_CV.pdf";
    link.download = "shahidkhan_CV.pdf";
    link.click();
  };
  return (
    <div className=" md:flex items-center justify-center space-x-5">
      <button
        onClick={toggleTheme}
        className=" rounded-xl px-4 py-1active:translate-y-0.5 text-white"
      >
        {theme === "dark" ? <MdDarkMode /> : <CiLight className="text-black" />}
      </button>
      <button
        onClick={handleDownload}
        className="hidden md:inline-block bg-black dark:bg-gray-700 rounded-xl  px-4 py-1 hover:bg-gray-800 dark:hover:bg-gray-600 active:translate-y-0.5 text-white"
      >
        Download CV
      </button>
    </div>
  );
}
