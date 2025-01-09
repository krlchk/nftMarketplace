import { useState } from "react";
// Components
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Browse from "./marketplacepageComponents.jsx/Browse";
import MarketPlaceNfts from "./marketplacepageComponents.jsx/MarketPlaceNfts";
// Images
import monkey from "../../../assets/monkey.png";
import negr from "../../../assets/negr.png";

const MarketPlacePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const marketPlaceNftsData = [
    {
      id: "1",
      image: monkey,
      title: "Magic Mushroom 0325",
      artistName: "Ice Ape Club",
      artistLogo: negr,
      price: "1.63 ETH",
      bid: "0.33 wETH",
    },
    {
      id: "2",
      image: monkey,
      title: "Happy Robot 032",
      artistName: "Ice Ape Club",
      artistLogo: negr,
      price: "1.63 ETH",
      bid: "0.33 wETH",
    },
    {
      id: "3",
      image: monkey,
      title: "Happy Robot 024",
      artistName: "Ice Ape Club",
      artistLogo: negr,
      price: "1.63 ETH",
      bid: "0.33 wETH",
    },
    {
      id: "4",
      image: monkey,
      title: "Designer Bear",
      artistName: "Ice Ape Club",
      artistLogo: negr,
      price: "1.63 ETH",
      bid: "0.33 wETH",
    },
    {
      id: "5",
      image: monkey,
      title: "Colorful Dog 0356",
      artistName: "Ice Ape Club",
      artistLogo: negr,
      price: "1.63 ETH",
      bid: "0.33 wETH",
    },
    {
      id: "6",
      image: monkey,
      title: "Dancing Robot 0312",
      artistName: "Ice Ape Club",
      artistLogo: negr,
      price: "1.63 ETH",
      bid: "0.33 wETH",
    },
    {
      id: "7",
      image: monkey,
      title: "Cherry Blossom Girl 035",
      artistName: "Ice Ape Club",
      artistLogo: negr,
      price: "1.63 ETH",
      bid: "0.33 wETH",
    },
    {
      id: "8",
      image: monkey,
      title: "Space Travel",
      artistName: "Ice Ape Club",
      artistLogo: negr,
      price: "1.63 ETH",
      bid: "0.33 wETH",
    },
    {
      id: "9",
      image: monkey,
      title: "IceCream Ape 0324",
      artistName: "Ice Ape Club",
      artistLogo: negr,
      price: "1.63 ETH",
      bid: "0.33 wETH",
    },
  ];
  const filteredNfts = marketPlaceNftsData.filter((nft) =>
    nft.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main>
      <Navbar />
      <Browse setSearchQuery={setSearchQuery} />
      <MarketPlaceNfts marketPlaceNftsData={filteredNfts} />
      <Footer />
    </main>
  );
};

export default MarketPlacePage;
