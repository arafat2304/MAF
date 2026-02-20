import { motion } from "framer-motion";

function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">

        <motion.div
          className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-green-800">
            Our Mission
          </h3>
          <p className="mt-5 text-gray-600 leading-relaxed">
            To provide superior-quality poultry products and
            nutritionally balanced feed at competitive prices,
            ensuring sustainable growth for farmers and
            complete customer satisfaction.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-green-800">
            Our Vision
          </h3>
          <p className="mt-5 text-gray-600 leading-relaxed">
            To lead with quality.  
            To grow with trust.  
            To serve with excellence.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default MissionVision;