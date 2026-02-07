function AboutHero() {
  return (
    <section className="bg-green-50">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-green-800">
            About Our Company
          </h1>
          <p className="mt-4 text-gray-600">
            We are committed to delivering high-quality poultry products
            through modern farming, scientific methods, and hygienic
            practices.
          </p>
        </div>

        <img
          src="./assets/hero farm image"
          alt="Poultry Farm"
          className="rounded-xl shadow-md w-full"
        />
      </div>
    </section>
  );
}

export default AboutHero;