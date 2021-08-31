import React from "react";
import { useSearchEngine } from "../components/fetchAPIdata.js";
import { useStateValue } from "../components/StateProvider.js";

/**
 * 
 * 
 * @returns search page
 */
export default function Results(){
    const [{term}, dispatch] = useStateValue();
    const {data} = useSearchEngine(term);

    console.log(data);
    return (
        <div style={{margin: "5%"}}>
            data
        </div>
    );
}