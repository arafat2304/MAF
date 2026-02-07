import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import AboutSection from "../sections/AboutSection";
import Stats from "../sections/Stats";
import ContactCTA from "../sections/ContactCTA";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutSection />
      <Stats />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default Home;