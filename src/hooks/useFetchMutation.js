import {useState} from "react";
import {getMenus} from "../service/menuApi";

const useFetchMutation = (mutation, onSuccess) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMutation = async(data)=>{
        try {
            setLoading(true);
            const result = await mutation(data);
            onSuccess?.(result);
        }catch (e){
            setError(true);
            console.log("ERROR", e);
        } finally {
            setLoading(false);
        }
    }

    return {loading, error, fetchMutation}
}

export default useFetchMutation;