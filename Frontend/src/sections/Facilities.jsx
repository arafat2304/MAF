import { motion } from "framer-motion";

import feed1 from "../assets/feedManufacturing.jpeg";
import feed2 from "../assets/finisher.jpeg";
import feed3 from "../assets/starter.jpeg";
import feed4 from "../assets/prestart.jpeg";

import hatch1 from "../assets/modernHatchery.jpeg";
import hatch2 from "../assets/modernHetchary1.jpeg";
import hatch3 from "../assets/modernHetchary2.jpeg";

import breed1 from "../assets/breederFarms.jpeg";
import breed2 from "../assets/modernHatchery.jpeg";
import breed3 from "../assets/breederFarms.jpeg";

function Facilities() {

  const items = [
    {
      title: "Feed Manufacturing",
      img: feed1,
      desc: "Scientifically balanced poultry feed using high-quality maize and soybean cake.",
      details: `Feed Manufacturing Excellence

At MERCHANT AGRI FOODS PVT LTD, our feed mills are designed to deliver scientifically balanced nutrition that supports superior poultry performance at every stage of growth.

We use carefully selected raw materials to ensure consistency, safety, and high nutritional value. High-quality maize serves as the primary energy source, while premium de-oiled soybean cake provides essential proteins required for muscle development and overall growth.

Our state-of-the-art feed mills operate with precision-controlled batching and advanced mixing technology to ensure uniform distribution of nutrients in every pellet.

Through innovation, quality control, and nutritional expertise, we ensure healthier birds and higher productivity.`,
      gallery: [feed4, feed3, feed2],
    },
    {
      title: "Modern Hatchery",
      img: hatch1,
      desc: "21-day controlled incubation with strict hygiene and biosecurity.",
      details: `At MERCHANT AGRI FOODS PVT LTD, our hatchery operates under a precisely controlled 21-day incubation cycle to ensure strong and healthy chick development.

Optimal temperature, humidity, and ventilation are maintained throughout the process. Strict biosecurity and hygiene standards are followed to provide a clean, safe, and disease-free environment.`,
      gallery: [hatch1, hatch2, hatch3],
    },
    {
      title: "Breeder Farms",
      img: breed1,
      desc: "High-quality parent stock managed under scientific conditions.",
      details: `Breeder farms are the backbone of integrated poultry operations.

At MERCHANT AGRI FOODS PVT LTD we manage high-quality parent stock under scientifically controlled conditions to ensure superior hatchable egg production.

Our farms follow strict biosecurity protocols, balanced nutritional programs, and modern farm management practices.`,
      gallery: [],
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-green-900">
          Our Facilities
        </h2>

        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
              whileHover={{ y: -6 }}
            >

              {/* Image */}
              <div className="relative">
                <img
                  src={item.img}
                  alt="Merchant Agri Foods Poultry Farm Anand"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-5 text-left">

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mt-4 whitespace-pre-line">
                  {item.details}
                </p>

                {/* Gallery */}
                {item.gallery.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mt-5">
                    {item.gallery.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt="facility"
                        className="h-24 w-full object-cover rounded-xl"
                      />
                    ))}
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Facilities;