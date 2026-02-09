import { ShieldCheck, Leaf, Factory } from "lucide-react";

function Highlights() {
  const items = [
    {
      icon: <ShieldCheck size={36} />,
      title: "Hygienic Production",
      desc: "Strict quality and hygiene standards",
    },
    {
      icon: <Leaf size={36} />,
      title: "Healthy Poultry",
      desc: "Scientifically raised broilers",
    },
    {
      icon: <Factory size={36} />,
      title: "Modern Facilities",
      desc: "Automated hatchery & feed plants",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-green-50 p-6 rounded-xl shadow text-center"
          >
            <div className="text-green-700 mb-3 flex justify-center">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;