import {useEffect, useState} from "react";

const useFetchQuery=(query, params)=>{
    const [fetching, setFetching] = useState(false);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const refetch=()=>{
        setFetching(true);
    }

    const fetchQuery= async ()=>{
        try {
            setLoading(true);
            const response = await query(params);
            setData(response.data);
        } catch (e){
            setError(true);
        } finally {
            setLoading(false);
            setFetching(false);
        }
    }

    useEffect(()=>{
        if(fetching){
            fetchQuery()
        }
    }, [fetching]);

    useEffect(()=>{
        fetchQuery();
    }, [params]);

    return {data, loading, error, refetch}
}

export default useFetchQuery;