function WhyChooseUs() {
  const points = [
    "High-quality chicks and broilers",
    "Hygienic and automated farms",
    "Scientific feeding methods",
    "Strong contract farming network",
    "Consistent supply and reliability",
    "Experienced technical team",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-green-800 text-center">
          Why Choose Us
        </h2>

        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {points.map((point, i) => (
            <div
              key={i}
              className="bg-green-50 p-6 rounded-xl shadow"
            >
              <p className="font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;