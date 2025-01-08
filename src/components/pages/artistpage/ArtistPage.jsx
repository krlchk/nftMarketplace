// Components
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import ArtistPageHeader from "./artistPageComponents/ArtistPageHeader";
import ArtistBio from "./artistPageComponents/ArtistBio";
import ArtistNFTs from "./artistPageComponents/ArtistNFTs";
// Artist Images
import Castle from "../../../assets/Castle.png";
import Logo from "../../../assets/ArtistPageLogo.png";
import TwitterLogo from "../../../assets/TwitterLogo.png";
import YoutubeLogo from "../../../assets/YoutubeLogo.png";
import InstagramLogo from "../../../assets/InstagramLogo.png";
import GlobeLogo from "../../../assets/Globe.png";
import DiscordLogo from "../../../assets/DiscordLogo.png";
// NFTs Images
import dogNft from "../../../assets/dogNft.png";

const ArtistPage = () => {
  const artistData = {
    id: "1",
    name: "Animakid",
    volume: "250k",
    sold: "50k",
    followers: "3000",
    code: "0xc0E3...B79C",
    bio: "The internet's friendliest designer kid.",
    nftList: [
      {
        id: "1",
        image: dogNft,
        title: "Distant Galaxy",
        artistName: "Animakid",
        artistLogo: Logo,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "2",
        image: dogNft,
        title: "Life On Edena",
        artistName: "Animakid",
        artistLogo: Logo,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "3",
        image: dogNft,
        title: "AstroFiction",
        artistName: "Animakid",
        artistLogo: Logo,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "4",
        image: dogNft,
        title: "CryptoCity",
        artistName: "Animakid",
        artistLogo: Logo,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "5",
        image: dogNft,
        title: "ColorfulDog 0524",
        artistName: "Animakid",
        artistLogo: Logo,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "6",
        image: dogNft,
        title: "Space Tales",
        artistName: "Animakid",
        artistLogo: Logo,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "7",
        image: dogNft,
        title: "Cherry Blossom Girl 037",
        artistName: "Animakid",
        artistLogo: Logo,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "8",
        image: dogNft,
        title: "Dancing Robots 0987",
        artistName: "Animakid",
        artistLogo: Logo,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
      {
        id: "9",
        image: dogNft,
        title: "IceCream Ape ",
        artistName: "Animakid",
        artistLogo: Logo,
        price: "1.63 ETH",
        bid: "0.33 wETH",
      },
    ],
    artistHeader: {
      backgroundImage: Castle,
      logoImage: Logo,
    },
    socialLinks: {
      twitter: TwitterLogo,
      youtube: YoutubeLogo,
      instagram: InstagramLogo,
      globe: GlobeLogo,
      discord: DiscordLogo,
    },
  };

  return (
    <main>
      <Navbar />
      <ArtistPageHeader artistHeader={artistData.artistHeader} />
      <ArtistBio artist={artistData} />
      <ArtistNFTs artistsNFTs={artistData.nftList} />
      <Footer />
    </main>
  );
};

export default ArtistPage;
