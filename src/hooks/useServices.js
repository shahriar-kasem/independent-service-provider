import { useEffect, useState } from "react";

const useServices = () => {
    const [fullData, setFullData] = useState([]);

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setFullData(data))
    }, []);

    return [fullData, setFullData];
};

export default useServices;