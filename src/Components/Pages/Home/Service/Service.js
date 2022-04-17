import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ data }) => {
    const { id, name, description, price, img } = data;
    const shortDescription = description.slice(0, 250) + '....';
    const navigate = useNavigate();

    const handleAppointment = id => {
        navigate(`/service/${id}`);
    }

    return (
        <section className='service-container'>
            <div className='service border border-3 mx-2 my-2'>
                <img src={img} alt="" />
                <h3><span className='text-primary'>{name}</span></h3>
                <h5><span className='text-danger'>Therapy fee:</span> <span className='fw-bold therapy-fee'>{price}</span></h5>
                <p><span className='fw-bold'>Therapy description:</span> {shortDescription}</p>
                <div className='book-appoinment'>
                    <button onClick={() => handleAppointment(id)} className='btn btn-primary fw-bold'>Book Appointment</button>
                </div>
            </div>
        </section>
    );
};

export default Service;