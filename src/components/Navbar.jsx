import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 bg-black text-white grid place-items-center border-2 border-black -rotate-3">
              <span className="font-extrabold">A</span>
            </div>
            <div>
              <p className="font-black tracking-tight leading-none">AlgoUniverrsity</p>
              <p className="text-xs -mt-0.5">School of CS & AI (ASCA)</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#tracks" className="hover:underline">Tracks</a>
            <a href="#faculty" className="hover:underline">Faculty</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#apply" className="px-4 py-2 bg-yellow-300 border-2 border-black shadow-[4px_4px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_0_#000] transition">Apply</a>
          </nav>
          <button className="md:hidden p-2 border-2 border-black bg-white shadow-[3px_3px_0_0_#000]" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
