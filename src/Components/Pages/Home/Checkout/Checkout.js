import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../../../hooks/useServices';
import './Checkout.css';

const Checkout = () => {

    const [fullData] = useServices();
    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        const match = fullData.find(data => data.id == id);
        setData(match);
    }, [id, fullData])

    return (
        <section className='service-details-container mt-3 mb-4'>
            {
                data?.id &&
                <div>
                    <h1 className='text-center'>Please confirm payment for <span className='text-primary'>{data.name}</span></h1>
                </div>
            }
            <div>
                {
                    data?.id &&
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h2 className='mb-3 text-info fw-bolder'>Fee: {data.price} TK</h2>
                        <img src={data.img} alt="" />
                        <p className='full-details'><span className='fw-bolder text-danger'>Full details:</span> {data.description}</p>
                        <button className='confirm-btn btn btn-primary fw-bold'>Confirm payment</button>
                    </div>
                }
            </div>
        </section>
    );
};

export default Checkout;