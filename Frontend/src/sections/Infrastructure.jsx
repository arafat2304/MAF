function Infrastructure() {
  const items = [
    "Modern Parent Breeding Farms",
    "Automated Hatchery Systems",
    "Scientific Broiler Rearing",
    "In-house Feed Production",
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-green-800 text-center">
          Our Infrastructure
        </h2>

        <div className="grid gap-6 mt-10 md:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Infrastructure;