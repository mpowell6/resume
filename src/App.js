import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";
import Navigation from "./components/nav/Navigation";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;