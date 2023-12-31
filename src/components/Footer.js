import "./FooterStyles.css";

import React from "react";
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaGithub } from "react-icons/fa";

const Footer = () => {
  const openFacebook = () => {
    window.open('https://www.facebook.com/fanza.fanza.1654/', '_blank');
  }
  const openInstagram = () => {
    window.open('https://www.instagram.com/fnzadht_/', '_blank');
  }
  const openGithub = () => {
    window.open('https://github.com/fnzadhitya', '_blank');
  }

  return <div className="footer">
    <div className="footer-container">

      <div className="left">
        <div className="location">
          <FaHome className="loglocation" size={24} style={{color: "#fff", marginRight: "0.5rem", marginTop: "1rem"}} />
          <div>
            <p>Desa Watuagung, Kec. Watulimo</p>
            <p>Kab. Trenggalek, Jawa Timur (66382)</p>
          </div>
        </div>
        <div className="phone">
          <h4>
            <FaPhone className="logphone" size={24} style={{color: "#fff", marginRight: "0.5rem"}} /> +62 857 0732 1658
          </h4>
        </div>
        <div className="email">
          <h4>
            <FaMailBulk className="logemail" size={24} style={{color: "#fff", marginRight: "0.5rem"}} /> fanzaadhitya3@gmail.com
          </h4>
        </div>
      </div>

      <div className="right">
        <div className="social">
          <FaFacebook onClick={openFacebook} size={26} style={{color: "#fff", marginRight: "2rem"}} />
          <FaInstagram onClick={openInstagram} size={26} style={{color: "#fff", marginRight: "2rem"}} />
          <FaGithub onClick={openGithub} size={26} style={{color: "#fff", marginRight: "2rem"}} />
        </div>
      </div>
      
    </div>
  </div>;
};

export default Footer;
