import React from "react";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// Home page
import Navigation from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";

// import general css
import "./css/styles.css";
// import SingleAppleProduct from "./Pages/Productpage/SingleAppleProduct";
import SingleAppleProductOne from "./Pages/Productpage/SingleAppleProductOne";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />

          {/* This one fetch api by id from idServer.js */}
          <Route path="/iphone/:pid"  element={<SingleAppleProductOne/>} />

          {/* This one use all fetch data and and identify click but by id from all data */}
          {/* <Route path="/iphone/:pid" exact element={<SingleAppleProduct />} /> */}
          <Route path="/" element={Four04} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
