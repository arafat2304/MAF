import { motion } from "framer-motion";
import heroImg from "../assets/logo.jpeg";

function AboutHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImg}
        alt="Poultry Farm"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          About Merchant Agri Foods
        </h1>

        <p className="mt-4 text-green-200 max-w-2xl mx-auto">
          Delivering premium poultry solutions through modern
          farming practices, scientific systems, and hygienic production.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutHero;