export default function CTA() {
  return (
    <section id="apply" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="border-4 border-black p-8 bg-orange-300 shadow-[10px_10px_0_0_#000]">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-3xl sm:text-4xl font-black">Entrance Exam — Applications Open</h3>
              <p className="mt-2 text-sm font-semibold">Secure your seat in the inaugural ASCA B.Tech cohort. Limited intake. High bar.</p>
              <ul className="mt-3 text-xs list-disc pl-5">
                <li>Early applicants receive mock interview prep with FAANG engineers</li>
                <li>Merit scholarships available based on performance</li>
              </ul>
            </div>
            <div className="flex lg:justify-end">
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-black text-white border-4 border-black font-extrabold shadow-[6px_6px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[5px_5px_0_0_#000] transition">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
