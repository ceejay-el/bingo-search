import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/Home.js";
import Results from "./pages/Results";

import './App.css';

function App() {
  return (
    <div className="bingo-search">
      <Router>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/search">
            <Results/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;