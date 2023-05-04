import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Couldn\'t fetch data! Please refresh page server is down...');
                }
                return res.json();
            })
            .then(data => {
                setInterval(() => {
                    setData(data);
                    setError(null);
                    setIsLoading(false);
                }, 1000);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            })
        }, [url]);

    return  {data, isLoading, error};
}

export default useFetch;