import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


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
import SingleAppleProduct from "./Pages/Productpage/SingleAppleProduct";
// import SingleAppleProductOne from "./Pages/Productpage/SingleAppleProductOne";


function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          {/* This one fetch api by id from idServer.js */}
          {/* <Route path="/iphone/:pid" exact component={SingleAppleProductOne} /> */}
          {/* This one use all fetch data and and identify click but by id from all data */}
          <Route path="/iphone/:pid" exact component={SingleAppleProduct} />
          <Route path="/" component={Four04} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
