import React from "react";
import "./features.css";

import app from "../../assets/app.png";
import calendar from "../../assets/calendar.png";
import dashboard from "../../assets/dashboard.png";
import messaging from "../../assets/messaging.png";
import billing from "../../assets/billing.png";

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
      <div className="elitefit__features-heading">
        <h1 className="gradient__text">
          Elite Fit Connect offers a suite of features in a single platform
          meant to maximize performance and minimize effort.
        </h1>
        {/* <p>Key features include...</p> */}
      </div>
      <div className="elitefit__features-cards section__padding">
        <div className="elitefit__features-cards_app1">
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
                A seamless Fitness App for both you and your clients with a{" "}
                <strong>unique interface</strong> and ability to access all
                other features Elite Fit Connect has to offer.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <img src={calendar} alt="app"></img>
            </div>
            <div className="card__header">
              <p>
                <a href="#app">Automated Calendars</a>
              </p>
            </div>
            <div className="card__text">
              <p>
                Organizing client workouts becomes easy with just a few clicks.
                You and your clients will both have access to calendars with{" "}
                <strong>automated reminders</strong>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <img src={dashboard} alt="app"></img>
            </div>
            <div className="card__header">
              <p>
                <a href="#dashboard">Dashboard</a>
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
        <div className="elitefit__features-cards_app1">
          <div className="card">
            <div className="card_img">
              <img src={messaging} alt="messaging"></img>
            </div>
            <div className="card__header">
              <p>
                <a href="#app">Client Messaging</a>
              </p>
            </div>
            <div className="card__text">
              <p>
                Centralize communication with clients with Elite Fit Connect's
                messaging capability on both the{" "}
                <strong>website interface & mobile app</strong>.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <img src={billing} alt="billing"></img>
            </div>
            <div className="card__header">
              <p>
                <a href="#app">Seamless Billing</a>
              </p>
            </div>
            <div className="card__text">
              <p>
                <strong>Elite Fit Connect + Stripe</strong> makes handling{" "}
                <strong>payments and invoicing</strong> for your personal
                training business much easier!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
