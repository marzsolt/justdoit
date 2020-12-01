import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import initFacebookSDK from './_helpers/initFacebookSDK';

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// wait for facebook sdk before startup
initFacebookSDK().then(startApp);

function startApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
