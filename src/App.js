import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Layout from "./components/Layout";
import ParticlesBG from "./components/ParticlesBG";
import About from "./components/About";

function App() {
  return (
    <React.Fragment>
      <ParticlesBG />
      <Router basename={"/covid19-dashboard-sl"}>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
