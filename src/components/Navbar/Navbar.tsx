import React, { useEffect, useState, useRef } from "react";
import Dropdown from "../Dropdown.tsx/Dropdown";
import "./styles.css";
import logo_white from "../../assets/images/logo_white.png";
import { FaWallet } from "react-icons/fa";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

let useClickOutside = (handler: any) => {
  let domNode: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    let maybeHandler = (event: any) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const Navbar = () => {
  let domNode = useClickOutside(() => {
    setStatus("close");
    setOpen(false);
  });
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
          <Link to="/">
            <img src={logo_white} alt="" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="Explore">Explorer</Link>
          <Link to="Item-Details">Item Details</Link>
          <Link to="Activity">Activity</Link>
          <Link to="Contact">Contact</Link>
          <Link to="Authors">Authors</Link>
        </div>
        <div
          ref={domNode}
          className={open ? "slider-menu active" : "slider-menu"}
        >
          <div>
            <Link
              onClick={() => {
                setStatus(status === "open" ? "close" : "open");
                setOpen(!open);
              }}
              to="/"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              onClick={() => {
                setStatus(status === "open" ? "close" : "open");
                setOpen(!open);
              }}
              to="Explore"
            >
              Explorer
            </Link>
          </div>
          <div>
            <Link
              onClick={() => {
                setStatus(status === "open" ? "close" : "open");
                setOpen(!open);
              }}
              to="Item-Details"
            >
              Item Details
            </Link>
          </div>
          <div>
            <Link
              onClick={() => {
                setStatus(status === "open" ? "close" : "open");
                setOpen(!open);
              }}
              to="Activity"
            >
              Activity
            </Link>
          </div>
          <div>
            <Link
              onClick={() => {
                setStatus(status === "open" ? "close" : "open");
                setOpen(!open);
              }}
              to="Contact"
            >
              Contact
            </Link>
          </div>
          <div>
            <Link
              onClick={() => {
                setStatus(status === "open" ? "close" : "open");
                setOpen(!open);
              }}
              to="Authors"
            >
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
