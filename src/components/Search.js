import React from "react";

import search_icon from "../images/search-icon.svg";
import "./Components.css";

export default function Search(){
    return (
        <div className="search">
            <form action="/" method="get" className="inputform">
                <input
                    type="text"
                    id="searchbar"
                    placeholder="Search"
                    className="inputbox"
                />
                <button type="submit" className="searchbtn">
                    <img src={search_icon} alt="Search button"/>
                </button>
            </form>
        </div>
    );
}