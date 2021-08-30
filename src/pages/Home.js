import React from "react";
import Search from "../components/Search.js";
import logo from "../images/bingo_logo.png";

export default function Home(){
    return (
        <section>
            <img src={logo} alt="Bingo logo" className="app-logo"/>
            <Search/>
        </section>
    );
}