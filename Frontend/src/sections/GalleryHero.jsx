import { motion } from "framer-motion";
import heroImg from "../assets/p1.jpg"; // koi strong gallery image use karo

function GalleryHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImg}
        alt="Gallery Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          Our Gallery
        </h1>

        <p className="mt-4 text-green-200 max-w-xl mx-auto">
          Explore our modern poultry farms, hatcheries,
          and advanced production facilities in action.
        </p>

        {/* Decorative Line */}
        <motion.div
          className="w-20 h-[3px] bg-green-500 mx-auto mt-6 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        />
      </motion.div>

    </section>
  );
}

export default GalleryHero;