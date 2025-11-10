import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] bg-white border-b-4 border-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl bg-white border-4 border-black p-6 sm:p-8 -rotate-1 shadow-[10px_10px_0_0_#000]">
            <span className="inline-block px-3 py-1 bg-yellow-300 border-2 border-black text-xs font-extrabold tracking-wide">NEW 4 YEAR B.TECH</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              ASCA: Become an Industry-Ready AI Engineer before Graduation
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-semibold">
              Faculty from FAANG. Specialized tracks for Google Summer of Code, ACM ICPC, and Facebook HackerCup AI.
            </p>
            <p className="mt-2 text-base">
              Graduate not as a fresher, but with 1.5 years of real industrial experience.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href="#apply" className="inline-flex items-center justify-center px-6 py-3 bg-green-300 border-2 border-black font-extrabold shadow-[6px_6px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[5px_5px_0_0_#000] transition">
                Apply for Entrance Exam
              </a>
              <a href="#tracks" className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-black font-extrabold shadow-[6px_6px_0_0_#000] hover:-rotate-1 transition">
                Explore Tracks
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-white border-2 border-black p-3 text-center">FAANG Faculty</div>
              <div className="bg-white border-2 border-black p-3 text-center">GSoC in Year 1 (2L stipend target)</div>
              <div className="bg-white border-2 border-black p-3 text-center">ACM ICPC Track</div>
              <div className="bg-white border-2 border-black p-3 text-center">HackerCup AI Champions (40/50 top ranks)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6),rgba(255,255,255,0.9))]"></div>
    </section>
  );
}
