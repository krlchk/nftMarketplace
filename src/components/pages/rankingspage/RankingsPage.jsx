// Components
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import RankingsHeader from "./rankingspageComponents/rankingsHeader";
import RankingsListComponent from "./rankingspageComponents/rankingsListComponent";
// Images
import rankLogo from "../../../assets/rankLogo.png";

const RankingsPage = () => {
  const rankingsListData = [
    {
      id: "1",
      place: "1",
      logo: rankLogo,
      name: "Jaydon Ekstrom Bothman",
      change: "1.41",
      nftsSold: "602",
      volume: "12.4",
    },
    {
      id: "2",
      place: "2",
      logo: rankLogo,
      name: "Ruben Carder",
      change: "1.41",
      nftsSold: "602",
      volume: "12.4",
    },
    {
      id: "3",
      place: "3",
      logo: rankLogo,
      name: "Alfredo Septimus",
      change: "1.41",
      nftsSold: "602",
      volume: "12.4",
    },
    {
      id: "4",
      place: "4",
      logo: rankLogo,
      name: "Davis Franci",
      change: "1.41",
      nftsSold: "602",
      volume: "12.4",
    },
    {
      id: "5",
      place: "5",
      logo: rankLogo,
      name: "Livia Rosser",
      change: "1.41",
      nftsSold: "602",
      volume: "12.4",
    },
    {
      id: "6",
      place: "6",
      logo: rankLogo,
      name: "Kianna Donin",
      change: "1.41",
      nftsSold: "602",
      volume: "12.4",
    },
  ];
  return (
    <main>
      <Navbar />
      <RankingsHeader />
      <RankingsListComponent data={rankingsListData} />
      <Footer />
    </main>
  );
};

export default RankingsPage;
