import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import {useStateValue} from "./StateProvider.js";
import {actionTypes} from "./reducer.js";
import search_icon from "../images/search-icon.svg";
import "./Components.css";


/**
 * Change state with user input inside search bar. input text is empty by default.
 * `useHistory` helps us access the history object, which allows us to navigate to other routes using `push` and `replace` methods.
 * 
 * @returns search bar
 */
export default function Search(){
    const [state, dispatch] = useStateValue();
    const [input, setText] = useState("");
    const history = useHistory();

    /**
     * TODO: serve data to the user
     */
    function query(event){
        event.preventDefault();
        
        
        history.push("/search");    // navigate to search results page
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });
    }

    // input tag captures text and changes state
    return (
        <div className="search">
            <form action="/" method="get" className="inputform" autoComplete="off">
                <input
                    type="text"
                    id="searchbar"
                    placeholder="Search"
                    className="inputbox"
                    value={input}
                    onChange={event => {setText(event.target.value)}}
                />
                <button type="submit" className="searchbtn" onClick={query}>
                    <img src={search_icon} alt="Search button"/>
                </button>
            </form>
        </div>
    );
}