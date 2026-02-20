import { motion } from "framer-motion";

function Infrastructure() {
  const items = [
    "Modern Parent Breeding Farms",
    "Automated Hatchery Systems",
    "Scientific Broiler Rearing",
    "In-house Feed Production",
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center">
          Our Infrastructure
        </h2>

        <div className="grid gap-6 mt-12 md:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold text-gray-700">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Infrastructure;