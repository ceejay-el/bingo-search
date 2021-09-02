import React from "react";
import { Link } from "react-router-dom";
import results from "../components/response.js";

/**
 * 
 * @returns search page
 */
export default function Results(){

    return (
        <div style={{margin: "2%"}}>
            <div className="searchpage-options">
                <div className="searchpage-option">
                    <Link to="/all">ALL</Link>
                </div>
            </div>

            <div className="related-search"></div>

            <div className="serp">
                {results.webPages.value.map(item => (
                    <div className="serp-result">
                        <a href={item.url}><h4>{item.name}</h4></a>
                        <p className="display-url">{item.displayUrl}</p>
                        <p className="snippet">{item.snippet}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}