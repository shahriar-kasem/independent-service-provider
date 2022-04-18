import React from 'react';
import './Home.css';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import useServices from '../../../../hooks/useServices';
import Service from '../Service/Service';
import { useNavigate } from 'react-router-dom';
import Achivements from '../Achivements/Achivements';

const Home = () => {
    const [fullData] = useServices();
    const navigate = useNavigate();

    return (
        <section>
            <Banner></Banner>
            <section className='home-services my-3'>
                <h1 className='fst-italic text-center'>My Services - <small className=' text-primary'>types of psychotherapy</small></h1>
                <div className='home-services-container'>
                    {
                        fullData.slice(0, 3).map(data => <Service
                            key={data.id}
                            data={data}
                        >
                        </Service>)
                    }
                </div>
                <div className='service-more-btn my-2'>
                    <button onClick={() => navigate('/services')} className='btn btn-info text-white fw-bolder w-50 align-center'>See more Therapy details</button>
                </div>

            </section>
            <Achivements></Achivements>
            <Footer></Footer>
        </section>
    );
};

export default Home;