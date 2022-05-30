import "./styles.css";
import { GoRocket } from "react-icons/go";
import { GiFiles } from "react-icons/gi";
const Banner = () => {
  return (
    <div className="banner">
      <h1>
        Discover, and collect <br />
        <span>extraordinary</span> Monster NFTs
      </h1>
      <span>
        Marketplace for Monster Character Collections Non Fungible Token NFTs
      </span>
      <div className="banner-btns">
        <button className="explore">
          <GoRocket /> Explore
        </button>
        <button className="create">
          <GiFiles /> Create
        </button>
      </div>
    </div>
  );
};

export default Banner;
