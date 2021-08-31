import {useState, useEffect} from "react";



// call APIs
const SEARCH_API_KEY = "oops"; //process.env.REACT_APP_SEARCH_KEY;

export function useSearchEngine(term){
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchSearchEngineData(term){
            await fetch(`http://api.serpstack.com/search?access_key=${SEARCH_API_KEY}&query=${term}`)
            .then(response => response.json())
            .then(result => {
                setData(result);
            });
        }
        fetchSearchEngineData();
    }, [term]);

    return {data};
}