export function Banner() {
  return (
    <div class="w-full h-7 bg-slate-900 text-white flex items-center overflow-hidden relative">
      <div class="whitespace-nowrap animate-slide flex items-center gap-8">
        <span class="text-xs font-medium uppercase tracking-widest">
          🚀 This is a shahid portfolio website prototype.
          <span class="text-yellow-400"></span>
        </span>
        <span
          class="text-xs font-medium uppercase tracking-widest"
          aria-hidden="true"
        >
          🚀 The site is under progress so, this is a demo.
          <span class="text-yellow-400"></span>
        </span>
      </div>
    </div>
  );
}
