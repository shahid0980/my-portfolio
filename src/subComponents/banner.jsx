function Banner() {
  return (
    <div className="w-full h-7 bg-slate-900 dark:bg-slate-800 text-white flex items-center overflow-hidden relative transition-colors duration-300">
      <div className="whitespace-nowrap animate-slide flex items-center gap-8">
        <span className="text-xs font-medium uppercase tracking-widest">
          🚀 This is a shahid portfolio website prototype.
          <span className="text-yellow-400"></span>
        </span>
        <span
          className="text-xs font-medium uppercase tracking-widest"
          aria-hidden="true"
        >
          🚀 The site is under progress so, this is a demo.
          <span className="text-yellow-400"></span>
        </span>
      </div>
    </div>
  );
}

export default Banner;
