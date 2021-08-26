import React, {useState} from "react";

import search_icon from "../images/search-icon.svg";
import "./Components.css";

export default function Search(){
    // change state with user input inside search bar
    // input text is empty by default
    const [text, setText] = useState("");

    /**
     * TODO: serve data to the user
     */
    function query(event){
        event.preventDefault();
    }

    // input tag captures text and changes state
    return (
        <div className="search">
            <form action="/" method="get" className="inputform">
                <input
                    type="text"
                    id="searchbar"
                    placeholder="Search"
                    className="inputbox"
                    value={text}
                    onChange={event => {setText(event.target.value)}}
                />
                <button type="submit" className="searchbtn" onClick={query}>
                    <img src={search_icon} alt="Search button"/>
                </button>
            </form>
        </div>
    );
}