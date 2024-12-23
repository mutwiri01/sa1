import React from "react";
import Logo from "../Assets/lg.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section">
        <div className="footer-logo-container">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-columns">
        <span>1234567890</span>
      </div>
    </div>
  );
};

export default Footer;