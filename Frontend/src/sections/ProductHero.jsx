import { motion } from "framer-motion";

function ProductHero() {
  return (
    <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
      <motion.div
        className="max-w-6xl mx-auto px-4 py-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Products
        </h1>
        <p className="mt-5 text-green-100 max-w-xl mx-auto">
          High-quality poultry products produced with modern,
          hygienic, and scientifically managed farming systems.
        </p>
      </motion.div>
    </section>
  );
}

export default ProductHero;