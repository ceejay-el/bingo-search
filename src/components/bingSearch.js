import {useEffect} from "react";

// call APIs
const SEARCH_API_KEY = process.env.REACT_APP_SEARCH_KEY;
const BING_ENDPOINT = "https://api.bing.microsoft.com/v7.0/search";

/**
 * customizable options to filter search results on the results page.
 * TODO: add this functionality to app
 * 
 * @param {*} form
 * 
 * @return search options
 */
export function bingSearchOptions(form){
    var options = [];
    options.push("textDecorations=true");           // Hardcoded text decoration option.
    options.push("textFormat=HTML");                // Hardcoded text format option.

    return options.join("&");
}

export function getSubscriptionKey(){
    return SEARCH_API_KEY;
}

/** 
 * Perform a search constructed from the query, options, and subscription key.
 * 
 */

export function bingWebSearch(query) {
    const key = getSubscriptionKey();

    if (!query.trim().length || query === null) return false;

    // create an XMLHttpRequest object
    const request = new XMLHttpRequest();
    const queryurl = BING_ENDPOINT + "?q=" + encodeURIComponent(query);

    // Initialize the request.
    try {
        request.open("GET", queryurl);
    }
    catch (e) {
        console.log("Bad request (invalid URL)\n" + queryurl);
        return false;
    }

    // Add request headers.
    request.setRequestHeader("Ocp-Apim-Subscription-Key", key);
    request.setRequestHeader("Accept", "application/json");

    // Event handler for successful response.
    useEffect(() => {
        request.addEventListener("load", handleRequest);
    });

    // Event handler for errors.
    request.addEventListener("error", function() {
        console.log("Error completing request");
    });

    // Event handler for an aborted request.
    request.addEventListener("abort", function() {
        console.log("Request aborted");
    });

    // Send the request.
    request.send();
    return false;
}

function handleRequest(){
    const json = this.responseText.trim();
    var jsobj = {};

    // try to parse results object
    try {
        if (json.length) jsobj = JSON.parse(json);
    } catch (error){
        console.log("Invalid JSON response");
        return;
    }

    return {jsobj};
}