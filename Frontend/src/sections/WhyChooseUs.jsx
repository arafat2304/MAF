import { motion } from "framer-motion";

function WhyChooseUs() {
  const points = [
    "High-quality chicks and broilers",
    "Hygienic and automated farms",
    "Scientific feeding methods",
    "Strong contract farming network",
    "Consistent supply and reliability",
    "Experienced technical team",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center">
          Why Choose Us
        </h2>

        <div className="grid gap-6 mt-12 md:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="bg-green-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-medium text-gray-700">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;