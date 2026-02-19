import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import WhoWeAre from "../sections/WhoWeAre";
import Facilities from "../sections/Facilities";
import MissionVision from "../sections/MissionVision";
import Stats from "../sections/Stats";
import ContactCTA from "../sections/ContactCTA";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Facilities />
      <MissionVision />
      <Stats />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default Home;