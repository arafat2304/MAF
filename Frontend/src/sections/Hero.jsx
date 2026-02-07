import heroImg from "../assets/Hero farm image.jpg";

function Hero() {
  return (
    <section className="bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] leading-tight">
            Hygienic & Modern Poultry Farming
          </h1>
          <p className="mt-4 text-gray-600">
            We provide high-quality chicks, broilers, and poultry feed
            using advanced scientific farming methods.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg">
              Contact Us
            </button>
            <button className="border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-lg">
              Our Products
            </button>
          </div>
        </div>

        {/* Image */}
        <img
          src={heroImg}
          alt="Poultry Farm"
          className="rounded-xl shadow-lg w-full"
        />
      </div>
    </section>
  );
}

export default Hero;