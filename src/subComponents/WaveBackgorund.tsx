import React, { ReactNode } from "react";

interface WaveBackgroundProps {
  children?: ReactNode;
}

const WaveBackground = ({ children }: WaveBackgroundProps) => {
  return (
    <div className="relative min-h-screen w-full bg-[#010b13] overflow-hidden">
      {/* The Wave Container 
          w-[200%] allows the wave to slide continuously without gaps
      */}
      <div className="absolute inset-0 pointer-events-none flex items-end">
        {/* Back Wave (Purple) */}
        <div className="absolute bottom-0 left-0 w-[200%] h-[40vh] opacity-30 animate-wave-slow">
          <WaveSvg fill="#7e22ce" />
        </div>

        {/* Middle Wave (Blue) */}
        <div className="absolute bottom-0 left-0 w-[200%] h-[45vh] opacity-50 animate-wave-medium">
          <WaveSvg fill="#3b82f6" />
        </div>

        {/* Front Wave (Teal/Cyan) */}
        <div className="absolute bottom-0 left-0 w-[200%] h-[50vh] opacity-80 animate-wave-fast">
          <WaveSvg fill="#2dd4bf" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {children || (
          <h1 className="text-white text-6xl font-black tracking-tighter">
            WAVY <span className="text-teal-400">FLOW</span>
          </h1>
        )}
      </div>
    </div>
  );
};

// Helper SVG component to keep the main code clean
const WaveSvg = ({ fill }: { fill: string }) => (
  <svg
    className="w-full h-full"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill={fill}
      d="M0,192L60,181.3C120,171,240,149,360,165.3C480,181,600,235,720,229.3C840,224,960,160,1080,128C1200,96,1320,96,1380,96L1440,96V320H0Z"
    ></path>
    {/* Doubling the path within the SVG to ensure a seamless loop */}
    <path
      fill={fill}
      d="M1440,192L1500,181.3C1560,171,1680,149,1800,165.3C1920,181,2040,235,2160,229.3C2280,224,2400,160,2520,128C2640,96,2760,96,2820,96L2880,96V320H1440Z"
    ></path>
  </svg>
);

export default WaveBackground;
