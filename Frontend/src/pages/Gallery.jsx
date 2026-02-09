import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryHero from "../sections/GalleryHero";
import GalleryGrid from "../sections/GalleryGrid";

function Gallery() {
  return (
    <>
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </>
  );
}

export default Gallery;