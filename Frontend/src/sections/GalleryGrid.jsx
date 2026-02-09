import img1 from "../assets/p1.jpg";
import img2 from "../assets/p2.jpg";
import img3 from "../assets/p3.jpg";
import img4 from "../assets/p4.jpg";
import img5 from "../assets/p5.jpg";
import img6 from "../assets/p6.jpg";

function GalleryGrid() {
  const images = [
    img1,img2,img3,img4,img5,img6
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow"
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-48 md:h-60 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryGrid;