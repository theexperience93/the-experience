import React from "react";
import ReactDOM from "react-dom";
import "./fonts/AvenirLTStd-Book.otf";
import "./fonts/AvenirLTStd-Medium.otf";
import "./fonts/AvenirLTStd-Roman.otf";
import "./fonts/Avenir-Black.otf";
import "./index.css";
import App from "./App";
// import Placeholder from "./Placeholder";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
