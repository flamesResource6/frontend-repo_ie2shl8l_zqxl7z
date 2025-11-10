export default function Tracks() {
  const tracks = [
    {
      title: "Google Summer of Code Track",
      subtitle: "Target GSoC in Year 1",
      desc: "Mentored roadmap to land Google Summer of Code with 2L stipend in the first year.",
      color: "bg-pink-300",
    },
    {
      title: "ACM ICPC Track",
      subtitle: "World Finalist Ambition",
      desc: "Competitive programming bootcamps, team formation, and world-class mentors.",
      color: "bg-cyan-300",
    },
    {
      title: "Facebook HackerCup AI Track",
      subtitle: "Champions League",
      desc: "Advanced AI-for-competitions curriculum — our students dominated 40/50 top world ranks.",
      color: "bg-lime-300",
    },
  ];

  return (
    <section id="tracks" className="bg-white border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-black">Specialized Tracks</h2>
          <p className="text-sm font-semibold">Choose your arena and train like a pro.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <div key={t.title} className={`border-4 border-black ${t.color} p-6 shadow-[8px_8px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[6px_6px_0_0_#000] transition`}> 
              <p className="text-xs font-extrabold uppercase">{t.subtitle}</p>
              <h3 className="mt-1 text-2xl font-black">{t.title}</h3>
              <p className="mt-2 text-sm font-medium">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
