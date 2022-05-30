import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import LiveAuctions from "../../components/LiveAuctions/LiveAuctions";
import NFTsSteps from "../../components/NFTsSteps/NFTsSteps";
import PopularCollection from "../../components/PopularCollection/PopularCollection";
import TodayPick from "../../components/TodayPick/TodayPick";
import TopSellers from "../../components/TopSellers/TopSellers";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <NFTsSteps />
      <LiveAuctions />
      <TopSellers />
      <TodayPick />
      <PopularCollection />
      <Footer />
    </div>
  );
};

export default Home;
