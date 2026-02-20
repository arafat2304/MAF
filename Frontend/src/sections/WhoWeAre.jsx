import { motion } from "framer-motion";

function WhoWeAre() {
  return (
    <section className="py-20 bg-white">
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-green-900">
          Who We Are
        </h2>

        <p className="mt-8 text-gray-600 leading-relaxed text-lg">
          At MERCHANT AGRI FOODS PVT LTD, we are driven by excellence
          and built on integrity. As a fully integrated poultry enterprise,
          we combine innovation, scientific management, and world-class
          infrastructure to deliver superior feed and high-quality poultry products.
        </p>

        <p className="mt-5 text-gray-600 leading-relaxed text-lg">
          Our commitment goes beyond production — we aim to elevate
          industry standards, empower farming communities, and create
          sustainable value for our partners and customers.
        </p>
      </motion.div>
    </section>
  );
}

export default WhoWeAre;