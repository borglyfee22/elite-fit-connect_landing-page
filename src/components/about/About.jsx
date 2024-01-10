import React from "react";
import "./about.css";

import workout from "../../assets/workout3.png";

const About = () => {
  return (
    <div className="elitefit__about section__padding" id="about">
      <div className="elitefit__about-content">
        <h1 className="gradient__text">Why Elite Fit Connect?</h1>
        <p>
          Here at Elite Fit Connect, we aim to provide personal trainers and
          coaches like yourself with a go-to solution to scale your business.
          Our team consists of individuals who priotize health and fitness, and
          have a collective experience of competing in sports through the
          collegiate level. This, along with our passion for helping businesses
          excelerate through innovative technology, Elite Fit Connect aims to
          revolutionize how you manage and grow your businesses.
        </p>
      </div>
      <div className="elitefit__about-image">
        <img src={workout} alt="workout" />
      </div>
    </div>
  );
};

export default About;
