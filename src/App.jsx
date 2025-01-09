import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import Registration from "./components/pages/registrationpage/Registration";
import ConnectWalletPage from "./components/pages/connectWalletpage/ConnectWalletPage";
import ArtistPage from "./components/pages/artistpage/ArtistPage";
import NftPage from "./components/pages/nftpage/NftPage";
import MarketPlacePage from "./components/pages/marketplacepage/MarketPlacePage";
import RankingsPage from "./components/pages/rankingspage/RankingsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/signup" element={<Registration />}></Route>
          <Route path="/connect-wallet" element={<ConnectWalletPage />}></Route>
          <Route path="/artist/:id" element={<ArtistPage />}></Route>
          <Route path="/nft" element={<NftPage />}></Route>
          <Route path="/marketplace" element={<MarketPlacePage />}></Route>
          <Route path="/rankings" element={<RankingsPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
