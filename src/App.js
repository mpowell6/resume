import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Navigation from "./components/Navigation/Navigation";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
