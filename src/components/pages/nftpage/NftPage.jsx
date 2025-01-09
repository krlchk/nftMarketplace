// Components
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import NftBio from "./nftPageComponents/NftBio";
import NftMore from "./nftPageComponents/NftMore";
// Images
import orbitians from "../../../assets/NftOrbitians.png";
import cat from "../../../assets/cat.png";
import orbitianArtist from "../../../assets/CreatorNine.png";

const NftPage = () => {
  const nftData = {
    id: "1",
    backgroundImage: orbitians,
    title: "The Orbitians",
    mintedDate: "Sep, 30, 2022",
    artistLogo: orbitianArtist,
    createdBy: "Orbitian",
    desc: `The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain, There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. They live in a metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.`,
    otherNftList: [
      {
        id: "1",
        image: cat,
        title: "Foxy Life",
        artistName: "Orbitian",
        artistLogo: orbitianArtist,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "2",
        image: cat,
        title: "Foxy Life",
        artistName: "Orbitian",
        artistLogo: orbitianArtist,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "3",
        image: cat,
        title: "Foxy Life",
        artistName: "Orbitian",
        artistLogo: orbitianArtist,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "4",
        image: cat,
        title: "Foxy Life",
        artistName: "Orbitian",
        artistLogo: orbitianArtist,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "5",
        image: cat,
        title: "Foxy Life",
        artistName: "Orbitian",
        artistLogo: orbitianArtist,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "6",
        image: cat,
        title: "Foxy Life",
        artistName: "Orbitian",
        artistLogo: orbitianArtist,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "7",
        image: cat,
        title: "Foxy Life",
        artistName: "Orbitian",
        artistLogo: orbitianArtist,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "8",
        image: cat,
        title: "Foxy Life",
        artistName: "Orbitian",
        artistLogo: orbitianArtist,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "9",
        image: cat,
        title: "Foxy Life",
        artistName: "Orbitian",
        artistLogo: orbitianArtist,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
    ],
  };

  return (
    <main>
      <Navbar />
      <NftBio nftData={nftData} />
      <NftMore moreNft={nftData.otherNftList} />
      <Footer />
    </main>
  );
};

export default NftPage;
