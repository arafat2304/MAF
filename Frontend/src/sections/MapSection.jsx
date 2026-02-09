function MapSection() {
  return (
    <section className="w-full">
      <iframe
        title="Company Location"
        src="https://www.google.com/maps?q=primary school jargal&output=embed"
        className="w-full h-80 border-0"
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default MapSection;