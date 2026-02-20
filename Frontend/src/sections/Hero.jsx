import { motion } from "framer-motion";
import heroImg from "../assets/ahad4.jpeg";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Merchant Agri Foods
          </h1>

          <p className="mt-5 text-lg text-green-100">
            Empowering poultry farmers with premium feed,
            modern hatchery solutions, and sustainable growth systems.
          </p>

          <p className="mt-4 text-green-200 font-semibold">
            Quality poultry. Trusted nutrition. Sustainable growth.
          </p>

          <button className="mt-8 bg-white text-green-800 px-7 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
            Contact Us
          </button>
        </motion.div>

        {/* Image */}
        <motion.img
          src={heroImg}
          alt="Poultry Farm"
          className="rounded-2xl shadow-2xl w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}

export default Hero;