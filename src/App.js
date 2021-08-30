import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/Home.js";
import Results from "./pages/Results.js";

import './App.css';

function App() {
  return (
    <div className="bingo-search">
      <Router>
        <Switch>
          <Route path="/search">
            <Results/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;