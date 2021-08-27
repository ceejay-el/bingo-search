import {useState, useEffect} from "react";

export default function useSearchEngine(term){
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData(term){
            await fetch(`http://api.serpstack.com/search?access_key=${process.env.REACT_APP_SEARCH_KEY}&query={term}`)
            .then(response => response.json())
            .then(result => {
                setData(result);
            });
        }
        fetchData();
    }, [term]);

    return {data};
}