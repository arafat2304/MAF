import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../sections/ContactHero";
import ContactForm from "../sections/ContactForm";
import MapSection from "../sections/MapSection";

function Contact() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <MapSection />
      <Footer />
    </>
  );
}

export default Contact;