import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import feed1 from "../assets/feedManufacturing.jpeg";
import feed2 from "../assets/finisher.jpeg";
import feed3 from "../assets/starter.jpeg";
import feed4 from "../assets/prestart.jpeg";

import hatch1 from "../assets/modernHatchery.jpeg";
import hatch2 from "../assets/modernHatchery.jpeg";
import hatch3 from "../assets/breederFarms.jpeg";

import breed1 from "../assets/breederFarms.jpeg";
import breed2 from "../assets/modernHatchery.jpeg";
import breed3 from "../assets/breederFarms.jpeg";

function Facilities() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Feed Manufacturing",
      img: feed1,
      desc: "Scientifically balanced poultry feed using high-quality maize and soybean cake.",
      details:
        `Feed Manufacturing Excellence

At MERCHANT AGRI FOODS PVT LTD, our feed mills are designed to deliver scientifically balanced nutrition that supports superior poultry performance at every stage of growth.

We use carefully selected raw materials to ensure consistency, safety, and high nutritional value. High-quality maize serves as the primary energy source, while premium de-oiled soybean cake provides essential proteins required for muscle development and overall growth. Every ingredient is sourced and processed under strict quality standards.

Our state-of-the-art feed mills operate with precision-controlled batching and advanced mixing technology to ensure uniform distribution of nutrients in every pellet. This guarantees optimal feed conversion ratios, faster weight gain, and improved flock health.

Through innovation, quality control, and nutritional expertise, we ensure that our feed contributes to healthier birds, higher productivity, and sustainable farming success.`,
      gallery: [feed4, feed3, feed2],
    },
    {
      title: "Modern Hatchery",
      img: hatch1,
      desc: "21-day controlled incubation with strict hygiene and biosecurity.",
      details:
        `Hatchery

At MERCHANT AGRI FOODS PVT LTD, our hatchery operates under a precisely controlled 21-day incubation cycle to ensure strong and healthy chick development. Optimal temperature, humidity, and ventilation are carefully maintained throughout the process.

Strict biosecurity and hygiene standards are followed at every stage to provide a clean, safe, and disease-free environment. Through advanced incubation technology and scientific management, we deliver high-quality, healthy day-old chicks for successful poultry farming.`,
      gallery: [hatch1, hatch2, hatch3],
    },
    {
      title: "Breeder Farms",
      img: breed1,
      desc: "High-quality parent stock managed under scientific conditions.",
      details:
        `Breeder Farms

Breeder farms are the backbone of integrated poultry operations. At MERCHANT AGRI FOODS PVT LTD, we manage high-quality parent stock under scientifically controlled conditions to ensure superior hatchable egg production.

Our farms follow strict biosecurity protocols, balanced nutritional programs, and modern farm management practices. This ensures consistent fertility, strong chick quality, and reliable performance throughout the production cycle.

Through careful monitoring and quality control, we maintain excellence at every stage — from parent stock management to egg supply for our hatcheries.`,
      gallery: [breed1, breed2, breed3],
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900">
          Our Facilities
        </h2>

        {/* Cards */}
        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl shadow-md overflow-hidden cursor-pointer"
              whileHover={{ y: -6 }}
              onClick={() =>
                setActiveIndex(activeIndex === i ? null : i)
              }
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>

              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <button className="mt-4 text-green-800 font-semibold text-sm">
                  {activeIndex === i ? "Close Details ↑" : "Learn More →"}
                </button>
              </div>

              {/* Expand Section */}
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    className="px-5 pb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-gray-600 text-sm mb-4">
                      {item.details}
                    </p>

                    {/* Gallery */}
                    <div className="grid grid-cols-3 gap-3">
                      {item.gallery.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt="facility"
                          className="h-24 w-full object-cover rounded-xl"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;