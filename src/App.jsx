import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Logein from "./Component/Logein";
import Home from "./Component/Home";
import Product from "./Component/Product";
import { Provider } from "react-redux";
import {  store } from "../src/App/Store";

import { BrowserRouter as Router, Outlet, Route, Link } from "react-router-dom";
import Navbar_2 from "./Component/Navbar_2";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <Navbar_2/> */}
        <Navbar />
       
      <Outlet/>
      </Provider>
    </>
  );
}

export default App;
