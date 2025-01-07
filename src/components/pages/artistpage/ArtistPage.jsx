import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import ArtistPageHeader from "./artistPageComponents/ArtistPageHeader";
import ArtistBio from "./artistPageComponents/ArtistBio";

const ArtistPage = () => {
  return (
    <main>
      <Navbar />
      <ArtistPageHeader />
      <ArtistBio />
      <Footer />
    </main>
  );
};

export default ArtistPage;
