import { useState, useCallback } from "react";

export function useMutation(mutationFn) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const mutate = useCallback(async (...args) => {
        setLoading(true);
        setError(null);
        try{
            const result = await mutationFn(...args);
            return result;
        } catch (err){
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [mutationFn]);

    return { mutate, loading, error };
}