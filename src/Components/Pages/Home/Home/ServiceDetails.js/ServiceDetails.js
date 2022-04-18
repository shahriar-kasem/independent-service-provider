import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../../../../hooks/useServices';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const [fullData] = useServices();
    const [data, setData] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const match = fullData.find(data => data.id == id);
        console.log(match);
    }, [id,fullData])

    return (
        <section className='service-details-container'>
            <h1>welcome to details page</h1>
            {/* <div className='service-details'>
                <img src={data.img} alt="" />
                <h2><span className='text-primary'>{data.name}</span></h2>
            </div> */}
        </section>
    );
};

export default ServiceDetails;