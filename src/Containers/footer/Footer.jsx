import React from "react";
import "./footer.css";

import logo from "../../assets/logo_short.png";

const Footer = () => {
  return (
    <div className="elitefit__footer-container section__padding">
      <div className="elitefit__footer-logo">
        <img src={logo} alt="longlogo" />
        {/* <p>All Rights Reserved</p> */}
      </div>
      <div className="elitefit__footer-heading">
        <h1 className="gradient__text">
          Do you want to accelerate your training business?
        </h1>
      </div>
      <div className="elitefit__footer-btn">
        <p>Join our network!</p>
      </div>

      <div className="elitefit__footer-links">
        {/*  <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div> */}
      </div>

      <div className="elitefit__footer-copyright">
        <p>@2024 Elite Fit Connect. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
