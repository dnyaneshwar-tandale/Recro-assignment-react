import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/index";

ReactDOM.render(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
