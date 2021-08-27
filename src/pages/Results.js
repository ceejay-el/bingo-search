import React from "react";
import useSearchEngine from "../components/useSearchEngine.js";

export default function Results(){
    const {data} = useSearchEngine(term);

    return (
        <div>
            {data}
        </div>
    );
}