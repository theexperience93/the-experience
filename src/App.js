import React from "react";
import logo from "./images/logo-hvit-nopadding.png";
import "./App.css";
import "./hexagons.css";

function App() {
  return (
    <div className="app">
      <div className="header-container">
        <div className="info-container">
          <h1 className="title"> The Experience </h1>
          <h2 className="subtitle"> Oslo// 1-3 May 2020 </h2>
          <p className="description">
            For up and coming volleyball teams in Europe
          </p>
        </div>
        <div className="hexagon-top-yellow" />
        <div className="hexagon-left-blue" />
        <div className="hexagon-top-blue" />
        <div className="hexagon-right-yellow" />

        {/*<div className="button-container">
          <button className="apply-button"> Apply now </button>
         </div> */}
        <img src={logo} className="x-logo" />
      </div>
      <div className="bottom-content">
        <h2 className="the-experience-quote">The Experience</h2>
        <p className="the-experience-sound">/ðə ɛkˈspɪərɪəns/</p>
        <p className="the-experience-meaning">
          the event or occurence which leads an impression on someone
        </p>
      </div>
    </div>
  );
}

export default App;
