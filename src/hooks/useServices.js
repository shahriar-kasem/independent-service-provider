import { useEffect, useState } from "react";

const useServices = () => {
    const [fullData, setFullData] = useState([]);

    useEffect(() => {
        fetch('https://shahriarkasem-web.github.io/api-repo/services.json')
            .then(res => res.json())
            .then(data => setFullData(data))
    }, []);

    return [fullData, setFullData];
};

export default useServices;