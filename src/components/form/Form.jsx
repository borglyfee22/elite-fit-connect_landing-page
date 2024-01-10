import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="elitefit__form section__padding" id="form">
      <div className="elitefit__form-content">
        <h1 className="gradient__text">
          Join our network to get early access to Elite Fit Connect!
        </h1>
        <div className="elitefit__form-content__input">
          <div className="elitefit__form-content__input-info">
            <input type="name" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <button type="button">Secure My Spot!</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
