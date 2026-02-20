import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import img1 from "../assets/p1.jpg";
import img2 from "../assets/p2.jpg";
import img3 from "../assets/p3.jpg";
import img4 from "../assets/p4.jpg";
import img5 from "../assets/p5.jpg";
import img6 from "../assets/p6.jpg";

function GalleryGrid() {
  const images = [img1, img2, img3, img4, img5, img6];

  const [currentIndex, setCurrentIndex] = useState(null);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Auto Slideshow
  useEffect(() => {
    if (currentIndex !== null) {
      const interval = setInterval(() => {
        nextImage();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setCurrentIndex(i)}
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-52 md:h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Viewer */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Close Button */}
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={30} />
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 text-white text-sm tracking-wider">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white bg-white/20 p-3 rounded-full backdrop-blur"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Full View"
              className="max-h-[85vh] rounded-2xl shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            />

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white bg-white/20 p-3 rounded-full backdrop-blur"
            >
              <ChevronRight size={28} />
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default GalleryGrid;