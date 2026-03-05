import { Helmet } from "react-helmet-async";
import Hero from "../sections/Hero";
import WhoWeAre from "../sections/WhoWeAre";
import Facilities from "../sections/Facilities";
import MissionVision from "../sections/MissionVision";
import Stats from "../sections/Stats";
import ContactCTA from "../sections/ContactCTA";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Merchant Agri Foods Pvt Ltd | Poultry Farm & Agri Food Company in Anand
        </title>

        <meta
          name="description"
          content="Merchant Agri Foods Pvt Ltd is a poultry and agri food company in Anand Gujarat providing high quality poultry products."
        />

        <meta
          name="keywords"
          content="Merchant Agri Foods, Merchant Agri Foods Pvt Ltd, Poultry Farm Anand, Chicken Supplier Anand"
        />
      </Helmet>

      <Hero />
      <WhoWeAre />
      <Facilities />
      <MissionVision />
      <Stats />
      <ContactCTA />
    </>
  );
}

export default Home;