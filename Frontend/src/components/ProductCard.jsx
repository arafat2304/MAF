function ProductCard({ product, onInquiry }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold">
          {product.name}
        </h3>
        <p className="text-gray-600 mt-2 text-sm">
          {product.description}
        </p>

        <button
          onClick={() => onInquiry(product)}
          className="mt-4 w-full bg-green-700 text-white py-2 rounded-lg"
        >
          Send Inquiry
        </button>
      </div>
    </div>
  );
}

export default ProductCard;