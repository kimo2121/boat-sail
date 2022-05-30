import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown.tsx/Dropdown";
import "./styles.css";
import { Link } from "react-scroll";
import logo_white from "../../assets/images/logo_white.png";
import { FaWallet } from "react-icons/fa";
import Search from "../Search/Search";
const Navbar = () => {
  const [show, handleShow] = useState(false);

  const [status, setStatus] = useState("close");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className={`navbar-container ${show && "nav_scroll"}`}>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo_white} alt="" />
        </div>
        <div className="navbar-links">
          <Link to="MINT" duration={800} smooth={true}>
            Home
          </Link>
          <Link to="MINT" duration={800} smooth={true}>
            Explorer
          </Link>
          <Link to="MINT" duration={800} smooth={true}>
            Item Details
          </Link>
          <Link to="MINT" duration={800} smooth={true}>
            Activity
          </Link>
          <Link to="MINT" duration={800} smooth={true}>
            Contact
          </Link>
          <Link to="MINT" duration={800} smooth={true}>
            Authors
          </Link>
        </div>
        <div className={open ? "slider-menu active" : "slider-menu"}>
          <div>
            <Link to="MINT" duration={800} smooth={true}>
              Home
            </Link>
          </div>
          <div>
            <Link to="MINT" duration={800} smooth={true}>
              Explorer
            </Link>
          </div>
          <div>
            <Link to="MINT" duration={800} smooth={true}>
              Item Details
            </Link>
          </div>
          <div>
            <Link to="MINT" duration={800} smooth={true}>
              Activity
            </Link>
          </div>
          <div>
            <Link to="MINT" duration={800} smooth={true}>
              Contact
            </Link>
          </div>
          <div>
            <Link to="MINT" duration={800} smooth={true}>
              Authors
            </Link>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Search />
          <button className="connect-wallet wallet">
            <FaWallet />
            <span>Wallet connect</span>
          </button>
          <div
            className="BurgerMenu__container"
            role="button"
            onClick={() => {
              setStatus(status === "open" ? "close" : "open");
              setOpen(!open);
            }}
          >
            <i className={status}></i>
            <i className={status}></i>
            <i className={status}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
