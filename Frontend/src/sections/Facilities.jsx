import feed from "../assets/ahad1.jpeg";
import hatchery from "../assets/ahad2.jpeg";
import breeder from "../assets/ahad3.jpeg";


function Facilities() {
  const items = [
    {
      title: "Feed Manufacturing",
      img: feed,
      desc: "Scientifically balanced poultry feed using high-quality maize and soybean cake.",
    },
    {
      title: "Modern Hatchery",
      img: hatchery,
      desc: "21-day controlled incubation with strict hygiene and biosecurity.",
    },
    {
      title: "Breeder Farms",
      img: breeder,
      desc: "High-quality parent stock managed under scientific conditions.",
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800">
          Our Facilities
        </h2>

        <div className="grid gap-8 mt-10 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;