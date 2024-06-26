import { useEffect, useState } from 'react';

function CustomApiHook(url) {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchApi = async (url) => {
        setLoading(true);
        setIsError(false);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUserData(data);
            setLoading(false);
        } catch (error) {
            setIsError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApi(url);
    }, [url]);

    return [userData, loading, isError];
}

export default CustomApiHook;
