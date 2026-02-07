function Stats() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Contract Farms" },
    { number: "1M+", label: "Chicks Monthly" },
    { number: "100+", label: "Employees" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-green-700">
              {item.number}
            </h3>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;