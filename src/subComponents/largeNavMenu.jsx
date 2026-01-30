function LargeNavMenu() {
  return (
    <>
      <a to="/home" className="hover:text-blue-500">
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
    </>
  );
}

export default LargeNavMenu;
