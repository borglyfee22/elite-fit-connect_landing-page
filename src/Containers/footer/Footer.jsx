import React from "react";
import "./footer.css";

import logo from "../../assets/logo_short.png";

const Links = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#team">The Team</a>
    </p>
    <p>
      <a href="terms-conditions">Terms & Conditions</a>
    </p>
    <p>
      <a href="privacypolicy">Privacy Policy</a>
    </p>
  </>
);

const Footer = () => {
  return (
    <div className="elitefit__footer-container section__padding">
      <div className="elitefit__footer-logo">
        <img src={logo} alt="longlogo" />
        {/* <p>All Rights Reserved</p> */}
      </div>
      <div className="columns">
        <div className="elitefit__footer-left">
          <div className="elitefit__footer-call">
            <h1 className="gradient__text">
              Do you want to accelerate your training business?
            </h1>
          </div>
          <div className="elitefit__footer-btn">
            <p>Join our network!</p>
          </div>
        </div>
        <div className="column-links">
          <div className="elitefit__footer-container__links">
            <div className="elitefit__footer-links_div">
              <h4>Links</h4>
              <Links />
            </div>
          </div>
          <div className="socials">
            <p>ig, in</p>
          </div>
        </div>
      </div>
      <div className="elitefit__footer-banner">
        <p>@2024 Elite Fit Connect. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
