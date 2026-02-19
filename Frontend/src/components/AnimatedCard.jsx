import { motion } from "framer-motion";

function AnimatedCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`bg-white rounded-xl shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedCard;