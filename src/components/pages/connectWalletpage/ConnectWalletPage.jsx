import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import ConnectWalletMainComponent from "./connectWalletPageComponents/ConnectWalletMainCOmponent";

const ConnectWalletPage = () => {
  return (
    <main>
      <Navbar />
      <ConnectWalletMainComponent />
      <Footer />
    </main>
  );
};

export default ConnectWalletPage;
