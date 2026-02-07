function AboutSection() {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        <img
          src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8"
          alt="Farm"
          className="rounded-xl shadow"
        />

        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-green-800">
            About Our Company
          </h2>
          <p className="mt-4 text-gray-600">
            We operate modern poultry farms, hatcheries, and feed plants
            to deliver high-quality poultry products with hygienic
            and scientific methods.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;