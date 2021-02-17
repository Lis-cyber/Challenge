import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import dotenv from "dotenv";
import axios from "axios"
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
