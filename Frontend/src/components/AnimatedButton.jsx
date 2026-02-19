import { motion } from "framer-motion";

function AnimatedButton({ children, className = "", onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-green-700 text-white px-6 py-3 rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButton;