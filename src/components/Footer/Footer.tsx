import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_white.png";
import { RiSendPlane2Fill } from "react-icons/ri";
import {
  FaTwitter,
  FaFacebook,
  FaTelegramPlane,
  FaYoutube,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";

const data1: Array<any> = [
  "Help & Support",
  "Live Auctions",
  "Item Details",
  "Activity",
];

const data2: Array<any> = [
  "Authors",
  "Collection",
  "Author Profile",
  "Create Item",
];
const data4: Array<any> = [
  { icon: <FaTwitter />, link: "/" },
  { icon: <FaFacebook />, link: "/" },
  { icon: <FaTelegramPlane />, link: "/" },
  { icon: <FaYoutube />, link: "/" },
  { icon: <FaTiktok />, link: "/" },
  { icon: <FaDiscord />, link: "/" },
];

const data3: Array<any> = ["Explore", "Contact Us", "Our Blog", "FAQ"];

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-div-container"></div>
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>
          The world’s first social exchange that rewards creators and fans for
          celebrating art + life.
        </p>
      </div>
      <div className="footer-marketplace footer-my-account">
        <h5>My Account</h5>
        {data2.map((item, indx) => (
          <Link key={indx} to="/">
            {item}
          </Link>
        ))}
      </div>
      <div className="footer-marketplace footer-resources">
        <h5>Resources</h5>
        {data1.map((item, indx) => (
          <Link key={indx} to="/">
            {item}
          </Link>
        ))}
      </div>
      <div className="footer-marketplace">
        <h5>Company</h5>
        {data3.map((item, indx) => (
          <Link key={indx} to="/">
            {item}
          </Link>
        ))}
      </div>
      <div className="footer-marketplace contact-part">
        <h5>Subscribe Us</h5>
        <div className="email-send">
          <input placeholder="info@yourgmail.com" type="text" />
          <div className="email-svg">
            <RiSendPlane2Fill />
          </div>
        </div>
        <div className="social-contact">
          {data4.map((item, indx) => (
            <div key={indx} className="social-contact-item">
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
