import { motion } from "framer-motion";
import i1 from "../assets/ContractFarming.jpg";
import i2 from "../assets/FeedProduction.jpg";
import i3 from "../assets/BroilerFarm.jpg";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Day-Old Chicks",
      description: "Healthy and high-quality chicks from modern hatchery.",
      image: i1,
    },
    {
      id: 2,
      name: "Broiler Chickens",
      description: "Scientifically raised broilers with hygienic methods.",
      image: i2,
    },
    {
      id: 3,
      name: "Poultry Feed",
      description: "Nutritionally balanced feed for healthy poultry growth.",
      image: i3,
    },
  ];

  const handleInquiry = (product) => {
    const phone = "917801888849"; // country code + number
    const message = `Hello, I am interested in ${product.name}. Please provide more details.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 w-full object-cover"
                />

                {/* Premium badge */}
                <span className="absolute top-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full">
                  Premium
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Enquiry Button */}
                <button
                  onClick={() => handleInquiry(product)}
                  className="mt-5 w-full bg-green-800 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  Enquire
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;