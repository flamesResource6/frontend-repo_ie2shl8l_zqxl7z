export default function Experience() {
  const items = [
    { k: "1.5 YEARS", v: "Industry Experience" },
    { k: "3x", v: "Faster Career Launch" },
    { k: "Top 1%", v: "Mentor network" },
    { k: "Global", v: "Competition pedigree" },
  ];

  return (
    <section id="experience" className="bg-white border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="border-4 border-black p-8 shadow-[10px_10px_0_0_#000] bg-green-200">
            <h3 className="text-3xl font-black">Graduate as a Professional</h3>
            <p className="mt-3 text-sm font-semibold">
              Our co-op model ensures you graduate with 1.5 years of paid, real industry experience
              across AI/ML engineering, backend systems, and product infra.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-center">
              {items.map((i) => (
                <li key={i.k} className="border-2 border-black bg-white px-4 py-3">
                  <p className="text-xl font-black">{i.k}</p>
                  <p className="text-xs font-extrabold uppercase">{i.v}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0_0_#000]">
              <p className="text-sm font-semibold">Curriculum designed with FAANG veterans, project-based from day 1.</p>
            </div>
            <div className="border-4 border-black p-6 bg-yellow-200 shadow-[8px_8px_0_0_#000]">
              <p className="text-sm font-semibold">Industry residencies embedded each semester to build real product muscle.</p>
            </div>
            <div className="border-4 border-black p-6 bg-pink-200 shadow-[8px_8px_0_0_#000]">
              <p className="text-sm font-semibold">Career support from engineers at Google, Meta, Amazon, Netflix, Apple.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
