// import { Link } from "react-router-dom";
// import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-white w-full py-2 flex items-center justify-center shadow-md">
      <div className=" w-full flex justify-center items-center md:justify-between px-32">
        {/* Left - Name */}
        <h1 className="text-xl font-bold text-gray-800">Shahid Khan</h1>

        {/* Right - Menu */}
        <div className="hidden md:flex justify-center items-center space-x-6 text-gray-700 font-medium">
          <a to="/" className="hover:text-blue-500">
            Home
          </a>
          <a to="/about" className="hover:text-blue-500">
            About
          </a>
          <a to="/skills" className="hover:text-blue-500">
            Skills
          </a>
          <a to="/contact" className="hover:text-blue-500">
            Contact
          </a>
          <div className="pl-6 flex items-center justify-center space-x-5">
            <div className="text-gray-200">|</div>
            <button className="">{/* <MdOutlineLightMode /> */}</button>
            <button className="bg-black rounded-xl text-white px-4 py-1 hover:bg-gray-800 active:translate-y-0.5">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
