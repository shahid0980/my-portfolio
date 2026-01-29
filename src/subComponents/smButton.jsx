export function SmButton(props) {
  return (
    <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-[2px] text-white  hover:text-gray-200">
      <span class="absolute inset-0 h-full w-full bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

      <span className="group-hover:bg-opacity-0 relative rounded-md bg-gray-900 px-8 py-2 transition-all duration-300">
        {" "}
        {props.text}
      </span>
    </button>
  );
}
