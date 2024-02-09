import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo4.jpg";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isNavbarFixed ? "fixed" : ""}`}>
        <div className="logo">
          <NavLink className="inactiveStyle" to="/" onClick={handleLinkClick}>
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        <div className={`nav-links ${isNavOpen ? "active" : ""}`}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
            to="/Services"
            onClick={handleLinkClick}
          >
            Services
          </NavLink>
          <NavLink
            to="/About"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
            to="/Contact"
            onClick={handleLinkClick}
          >
            Contact Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
            to="/FAQ"
            onClick={handleLinkClick}
          >
            FAQ
          </NavLink>
        </div>
        <div className="burger" onClick={toggleNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Header;
