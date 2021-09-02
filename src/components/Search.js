import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import { bingSearchOptions, getSubscriptionKey, bingWebSearch } from "./bingSearch.js";
import search_icon from "../images/search-icon.svg";
import "./Components.css";


/**
 * Change state with user input inside search bar. input text is empty by default.
 * `useHistory` helps us access the history object, which allows us to navigate to other routes using `push` and `replace` methods.
 * 
 * @returns search bar
 */
export default function Search(){
    const [input, setInput] = useState("");
    const history = useHistory();

    /**
     * TODO: serve data to the user
     */
    function handleSubmit(event){
        event.preventDefault();

        history.push("/search");    // navigate to search results page

        const searchOptions = bingSearchOptions(event);
        const apiKey = getSubscriptionKey();
        bingWebSearch(input, searchOptions, apiKey);
    }

    // input tag captures text and changes state
    return (
        <div className="search">
            <form
                action="/"
                method="get"
                className="inputform"
                autoComplete="off"
                onSubmit={handleSubmit}
                >
                <input
                    type="text"
                    id="searchbar"
                    placeholder="Search"
                    className="inputbox"
                    value={input}
                    onChange={event => {setInput(event.target.value)}}
                />
                <button type="submit" className="searchbtn">
                    <img src={search_icon} alt="Search button"/>
                </button>
            </form>
        </div>
    );
}