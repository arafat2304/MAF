import ProductCard from "../components/ProductCard";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Day-Old Chicks",
      description: "Healthy and high-quality chicks from modern hatchery.",
      image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4",
    },
    {
      id: 2,
      name: "Broiler Chickens",
      description: "Scientifically raised broilers with hygienic methods.",
      image: "https://images.unsplash.com/photo-1604908177225-9a5c8c2bdbef",
    },
    {
      id: 3,
      name: "Poultry Feed",
      description: "Nutritionally balanced feed for healthy poultry growth.",
      image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd",
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