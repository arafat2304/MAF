import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../sections/AboutHero";
import MissionVision from "../sections/MissionVision";
import Infrastructure from "../sections/Infrastructure";
import WhyChooseUs from "../sections/WhyChooseUs";

function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <MissionVision />
      <Infrastructure />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default About;