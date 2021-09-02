import React from "react";
import { Link } from "react-router-dom";

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


        </div>
    );
}