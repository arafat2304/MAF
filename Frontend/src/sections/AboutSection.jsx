import aboutImg from "../assets/p2.jpg";

function AboutSection() {
  return (
    <section className="bg-green-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="Poultry Farm"
            className="rounded-2xl shadow-lg w-full"
          />

          {/* Floating badge */}
          <div className="absolute bottom-4 left-4 bg-white shadow-md px-4 py-2 rounded-lg">
            <p className="text-green-800 font-bold text-lg">
              10+ Years Experience
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 leading-tight">
            Modern Poultry Farming with
            <span className="block">Quality & Hygiene</span>
          </h2>

          <p className="mt-5 text-gray-600">
            We operate advanced poultry breeding farms, hatcheries,
            and feed plants using scientific methods and automated
            systems to deliver high-quality poultry products.
          </p>

          {/* Highlights */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-700 rounded-full"></span>
              Modern automated hatchery systems
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-700 rounded-full"></span>
              Scientifically raised broiler farms
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-700 rounded-full"></span>
              In-house high-quality feed production
            </li>
          </ul>

          {/* CTA Button */}
          <button className="mt-8 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;