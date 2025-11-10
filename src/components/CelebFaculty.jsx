import { Star } from "lucide-react";

const celebs = [
  { name: "Dr. Aisha Verma", tag: "Ex-Google Research", color: "bg-yellow-300" },
  { name: "Rahul Iyer", tag: "Ex-Amazon AI", color: "bg-pink-300" },
  { name: "Mina Park", tag: "Ex-Meta FAIR", color: "bg-cyan-300" },
  { name: "Liam O’Connor", tag: "Ex-Netflix ML", color: "bg-lime-300" },
  { name: "Sofia Martinez", tag: "Ex-Apple Siri", color: "bg-orange-300" },
];

export default function CelebFaculty() {
  return (
    <section id="faculty" className="bg-white border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mb-8 flex items-center gap-3">
          <Star className="stroke-[3]" />
          <h2 className="text-3xl sm:text-4xl font-black">Faculty — Tech Celebrities</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {celebs.map((c) => (
            <div key={c.name} className={`border-4 border-black ${c.color} p-6 text-center shadow-[8px_8px_0_0_#000] hover:-rotate-1 transition`}>
              <div className="mx-auto h-20 w-20 rounded-full border-2 border-black bg-white grid place-items-center mb-3">
                <span className="text-2xl">✨</span>
              </div>
              <p className="text-lg font-black">{c.name}</p>
              <p className="text-xs font-extrabold uppercase">{c.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
