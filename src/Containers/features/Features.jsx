import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./features.css";

import app from "../../assets/app.png";
import calendar from "../../assets/calendar.png";

const Links = () => (
  <>
    <p>
      <a href="#calendar">Automated Calendar</a>
    </p>
    <p>
      <a href="#billing">Seamless Billing</a>
    </p>
    <p>
      <a href="#dashboard">Client Dashboard and Reports</a>
    </p>
    <p>
      <a href="#messaging">Messaging</a>
    </p>
  </>
);

const Features = () => {
  return (
    <div className="elitefit_features section__padding" id="features">
      <div className="elitefit__features-content">
        <h1 className="gradient__text">Features </h1>
        <p>Key features include...</p>
        <div className="elitefit__features-content-cards1">
          <div className="elitefit__features-content-cards1_app">
            <div className="card">
              <div className="card_img">
                <img src={app} alt="app"></img>
              </div>
              <div className="card__header">
                <p>
                  <a href="#app">Client/Coach App</a>
                </p>
              </div>
              <div className="card__text">
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card_img">
                <img src={calendar} alt="app"></img>
              </div>
              <div className="card__header">
                <p>
                  <a href="#app">Client/Coach App</a>
                </p>
              </div>
              <div className="card__text">
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
