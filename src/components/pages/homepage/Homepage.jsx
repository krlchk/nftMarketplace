import Navbar from "../../navbar/Navbar";
import HomepageHero from "./homepageComponents/HomepageHero";
import HomepageSectionOne from "./homepageComponents/HomepageSectionOne";
import HomePageCreatorsSection from "./homepageComponents/HomePageCreatorsSection";
import HomepageCategoriesSection from "./homepageComponents/HomepageCategoriesSection";
import HomepageNFTSection from "./homepageComponents/HomepageNFTSection";
import HomepageSectionFive from "./homepageComponents/HomepageSectionFive";
import HomepageSectionSix from "./homepageComponents/HomepageSectionSix";
import HomepageSectionSeven from "./homepageComponents/HomepageSectionSeven";
import Footer from "../../footer/Footer";

const Homepage = () => {
  return (
    <main>
      <Navbar />
      <HomepageHero />
      <HomepageSectionOne />
      <HomePageCreatorsSection />
      <HomepageCategoriesSection />
      <HomepageNFTSection />
      <HomepageSectionFive />
      <HomepageSectionSix />
      <HomepageSectionSeven/>
      <Footer/>
    </main>
  );
};

export default Homepage;
