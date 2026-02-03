import { useDarkMode } from "../hooks/themes";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className || ""} bg-black dark:bg-gray-700 rounded-xl  px-4 py-1 hover:bg-gray-800 dark:hover:bg-gray-600 active:translate-y-0.5 text-white font-bold`}
    >
      {props.text}
    </button>
  );
};

export function NavButton() {
  let { theme, toggleTheme } = useDarkMode();

  function handleDownload() {
    const link = document.createElement("a");
    link.href = "shahidkhan_CV.pdf";
    link.download = "shahid-resume.pdf";
    link.click();
  }

  return (
    <div className="hidden md:flex items-center justify-center space-x-5">
      <button
        onClick={toggleTheme}
        className=" rounded-xl active:translate-y-0.5 text-white text-xl"
      >
        {theme === "dark" ? <MdDarkMode /> : <CiLight className="text-black" />}
      </button>
      <Button text="Download CV" onClick={handleDownload} />
    </div>
  );
}
