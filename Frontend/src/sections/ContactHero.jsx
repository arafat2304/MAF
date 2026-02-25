import { motion } from "framer-motion";
import heroImg from "../assets/p2.jpg";

function ContactHero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center text-white">

      <img
        src={heroImg}
        alt="Contact"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact Us
        </h1>
        <p className="mt-4 text-green-200">
          Let’s grow together with quality and trust.
        </p>
      </motion.div>

    </section>
  );
}

export default ContactHero;