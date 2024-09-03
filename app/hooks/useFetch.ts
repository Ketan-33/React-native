import {useEffect, useState} from "react";

const useFetch =({url}: {url: string}) => {
    const [response,setResponse]=useState();
    const [loading,setLoading]=useState<boolean>(false);

    const executeFetch=async ()=>{
        setLoading(true);
        const resp =await fetch(url);
        const respJson = await resp.json();
        setResponse(respJson);
        setLoading(false);
    }
    return({
        response,
        isLoading: loading,
        executeFetch
    })
}