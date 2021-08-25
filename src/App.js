

import Search from "./components/Search.js";
import logo from "./images/bingo_logo.png"

import './App.css';

function App() {
  return (
    <div className="bingo-search">
      <img src={logo} alt="Bingo logo" className="app-logo"/>
      <Search/>
    </div>
  );
}

export default App;