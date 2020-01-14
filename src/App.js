import React, { useEffect, useRef } from "react";
import ReactGA from "react-ga";
import Form from "./Form";
import logo from "./images/logo-hvit-nopadding.png";

import "./App.css";
import "./hexagons.css";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-154697902-1");
    ReactGA.event({
      category: "View",
      action: "Page loaded"
    });
  }, []);

  const inputRef = useRef(null);

  return (
    <div className="app">
      <div className="header-container">
        <div className="info-container">
          <h1 className="title"> The Experience </h1>
          <h2 className="subtitle"> Oslo// 1-3 May 2020 </h2>
          <p className="description">
            For up and coming volleyball teams in Europe with a prizepool of
            €20&nbsp;000
          </p>
        </div>
        <div className="hexagon-top-yellow" />
        <div className="hexagon-left-blue" />
        <div className="hexagon-top-blue" />
        <div className="hexagon-right-yellow" />

        {window.location.href.includes("hugo") && (
          <div className="button-container">
            <button
              className="apply-button"
              onClick={() => {
                window.scrollTo({
                  behavior: "smooth",
                  top: inputRef.current.offsetTop
                });
                inputRef.current.focus();
              }}
            >
              Apply now
            </button>
          </div>
        )}
        <img src={logo} className="x-logo" alt="x-logo" />
      </div>
      <div className="bottom-content">
        {window.location.href.includes("hugo") && <Form inputRef={inputRef} />}
        <h2 className="the-experience-quote">The Experience</h2>
        <p className="the-experience-sound">/ðə ɛkˈspɪərɪəns/</p>
        <p className="the-experience-meaning">
          the event or occurence which leads an impression on someone
        </p>
      </div>
    </div>
  );
};

export default App;
