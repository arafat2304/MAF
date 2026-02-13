import ProductCard from "../components/ProductCard";
import i1 from "../assets/ContractFarming.jpg";
import i2 from "../assets/FeedProduction.jpg"
import i3 from "../assets/BroilerFarm.jpg"

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Day-Old Chicks",
      description: "Healthy and high-quality chicks from modern hatchery.",
      image: i1,
    },
    {
      id: 2,
      name: "Broiler Chickens",
      description: "Scientifically raised broilers with hygienic methods.",
      image: i2,
    },
    {
      id: 3,
      name: "Poultry Feed",
      description: "Nutritionally balanced feed for healthy poultry growth.",
      image:i3,
    },
  ];

  const handleInquiry = (product) => {
    alert(`Inquiry sent for: ${product.name}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onInquiry={handleInquiry}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;