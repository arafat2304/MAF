import hatchery from "../assets/Hatchery chicks.jpg";
import broiler from "../assets/Broiler farm.jpg";
import feed from "../assets/feed production.jpg";
import contract from "../assets/Contract farming.jpg";

function Services() {
  const services = [
    { title: "Breeding & Hatchery", img: hatchery },
    { title: "Broiler Farming", img: broiler },
    { title: "Feed Production", img: feed },
    { title: "Contract Farming", img: contract },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-primary)]">
          Our Operations
        </h2>

        <div className="grid gap-6 mt-10 md:grid-cols-4">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;