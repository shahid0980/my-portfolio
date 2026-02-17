import React from 'react';



type props = {
  children: React.ReactNode
}

const FigmaGradientsBg = ({ children }: props) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* Blurred Gradient Blob */}
      <div
        className="absolute  w-[800px] h-[800px] rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-purple-500 opacity-40 blur-[150px]"
      ></div>

      {/* Content */}
      {/* <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <svg className="w-12 h-12 mx-auto" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0C4.253 0 0 4.253 0 9.5C0 14.747 4.253 19 9.5 19H19V9.5C19 4.253 14.747 0 9.5 0Z" fill="#F24E1E" />
            <path d="M0 28.5C0 23.253 4.253 19 9.5 19H19V28.5C19 33.747 14.747 38 9.5 38C4.253 38 0 33.747 0 28.5Z" fill="#A259FF" />
            <path d="M0 47.5C0 42.253 4.253 38 9.5 38C14.747 38 19 42.253 19 47.5C19 52.747 14.747 57 9.5 57C4.253 57 0 52.747 0 47.5Z" fill="#1ABCFE" />
            <path d="M19 0H28.5C33.747 0 38 4.253 38 9.5C38 14.747 33.747 19 28.5 19H19V0Z" fill="#0ACF83" />
            <path d="M19 19H28.5C33.747 19 38 23.253 38 28.5C38 33.747 33.747 38 28.5 38H19V19Z" fill="#FF7262" />
          </svg>
        </div> */}
      {children}
    </div>
    // </div>
  );
};

export default FigmaGradientsBg;