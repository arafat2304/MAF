import { motion } from "framer-motion";

function CompanyObjectives() {
  const objectives = [
    {
      title: "Poultry Breeding and Hatchery Operations",
      desc: "Operating modernized parent poultry breeding farms and hatcheries to produce high-quality chicks and hatching eggs."
    },
    {
      title: "Poultry Farming",
      desc: "Managing owned and contract rearing farms for broiler growing using automation systems and scientific rearing methods."
    },
    {
      title: "Poultry Feed Production",
      desc: "Manufacturing poultry feed for internal consumption to ensure consistent quality and better farm efficiency."
    },
    {
      title: "Expansion and Growth",
      desc: "Continuously expanding parent farm capacity and increasing contract farms to meet growing demand."
    },
    {
      title: "Providing Protein Source",
      desc: "Producing hygienic and reliable poultry products that provide an affordable protein source."
    },
    {
      title: "Marketing of Products",
      desc: "Marketing poultry products including day-old chicks, broiler chickens, and poultry feed."
    },
    {
      title: "Contract Farming",
      desc: "Partnering with contract farms across Indian states for broiler rearing and poultry production."
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center">
          Our Activities & Objectives
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mt-4">
          Merchant Agri Foods Pvt. Ltd. operates across multiple areas of the
          poultry industry with a focus on quality production, modern
          infrastructure, and sustainable growth.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {objectives.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-green-800">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CompanyObjectives;