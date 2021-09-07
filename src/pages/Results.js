import React from "react";
import {Link} from "react-router-dom";
import {bingWebSearch} from "../components/bingSearch.js";
import {useStateValue} from "../components/StateProvider.js";
import results from "../components/results.js";

/**
 * 
 * @returns search page
 */
export default function Results(){
    const [{term}, dispatch] = useStateValue();
    const {data} = bingWebSearch(term);

    console.log(results._type);


    return (
        <div style={{margin: "2%"}}>
            <div className="searchpage-options">
                <div className="searchpage-option">
                    <Link to="/all">ALL</Link>
                </div>
            </div>

            <div className="related-search"></div>
            <div className="search-results">
                {results.webPages.value(item => (
                    <div>{item[0].snippet}</div>
                ))}
            </div>
        </div>
    );
}