import React from "react";
import logo from "./images/logo-hvit-nopadding.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import "./placeholder.css";

const Placeholder = ({}) => {
  return (
    <div className="wrapper">
      <div className="logo-and-text-wrapper">
        <img src={logo} alt="X-logo" className="experience-logo" />
        <p className="logo-subtitle">The Experience</p>
      </div>
      <div className="flex-center">
        <p className="title">Something will happen</p>
        <p className="date">01.01.2020</p>
      </div>
      <div className="flex-center">
        <p className="check-us-out">Check us out on Facebook or Instagram</p>
        <div className="some-logos">
          <img
            src={facebook}
            onClick={() =>
              window.open("https://www.facebook.com/Thexperiencevb/", "_blank")
            }
            alt="facebook logo"
            className="some-logo"
          />
          <img
            src={instagram}
            onClick={() =>
              window.open(
                "https://www.instagram.com/thexperience_volleyball/",
                "_blank"
              )
            }
            alt="instagram logo"
            className="some-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
