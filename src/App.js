import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import GalleryHome from './container/Gallery'
import Header from "./container/Header";
import Footer from "./container/Footer";
import Contact from "./container/Contact";
import ShopHome from './container/Shop';
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/shop">
            <ShopHome />
          </Route>
          <Route path="/gallery">
            <GalleryHome />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
