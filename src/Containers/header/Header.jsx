import React from "react";
import "./header.css";

import workout from "../../assets/workout.png";

const Header = () => {
  return (
    <div className="elitefit_header section__padding" id="home">
      <div className="elitefit__header-content">
        <h1 className="gradient__text">
          Personal training software to elevate your business
        </h1>
        <p>
          Are you a personal trainer, gym owner, fitness coach? Elite-Fit
          Connect is dedicated to elevating your business by streamlining and
          automating your day-to-day operations. Our easy to use software is
          designed to enhance productivity, improve client communication, and
          elevate the overall fitness experience.
        </p>
      </div>
      {/* <div className="elitefit__header-image">
        <img src={workout} alt="workout" />
      </div> */}
    </div>
  );
};

export default Header;
