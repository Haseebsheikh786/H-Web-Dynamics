import React from "react";
import logo from "../../assets/images/logo4.jpg";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import { MdMail, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
        </div>
      </div>
      <div className="footer-row">
        <nav className="footer-nav">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/FAQ">FAQ </NavLink>
        </nav>
      </div>

      <div className="footer-row">
        <div className="footer-social">
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
          <a href="https://twitter.com">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com">
            <MdMail />
          </a>
          <a href="tel:+923427282514" style={{ textDecoration: "none" }}>
            <MdPhone />
          </a>
        </div>
      </div>
      <div className="footer-row">
        <p>&copy; 2024 H Web Dynamics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
