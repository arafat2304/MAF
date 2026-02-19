import heroImg from "../assets/ahad4.jpeg";

function Hero() {
  return (
    <section className="bg-green-50">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-green-800 leading-tight">
            MERCHANT AGRI FOODS PVT LTD
          </h1>

          <p className="mt-4 text-gray-700 text-lg">
            Empowering poultry farmers with top-quality inputs and
            integrated solutions for sustainable growth.
          </p>

          <p className="mt-3 text-green-700 font-semibold">
            Quality poultry. Trusted nutrition. Sustainable growth.
          </p>

          <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg">
            Contact Us
          </button>
        </div>

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