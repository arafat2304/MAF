import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductHero from "../sections/ProductHero";
import ProductList from "../sections/ProductList";

function Products() {
  return (
    <>
      <Navbar />
      <ProductHero />
      <ProductList />
      <Footer />
    </>
  );
}

export default Products;