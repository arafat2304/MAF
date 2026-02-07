function MissionVision() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        
        <div className="bg-green-50 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-green-800">
            Our Mission
          </h3>
          <p className="mt-4 text-gray-600">
            To provide hygienic, high-quality poultry products using
            advanced technology and scientific farming methods.
          </p>
        </div>

        <div className="bg-green-50 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-green-800">
            Our Vision
          </h3>
          <p className="mt-4 text-gray-600">
            To become a trusted leader in the poultry industry by
            expanding modern farming infrastructure and supporting
            contract farmers across the country.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;