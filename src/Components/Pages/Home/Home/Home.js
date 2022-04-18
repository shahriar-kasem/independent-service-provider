import React from 'react';
import './Home.css';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import useServices from '../../../../hooks/useServices';
import Service from '../Service/Service';
import Achivements from '../Achivements/Achivements';

const Home = () => {
    const [fullData] = useServices();

    return (
        <section>
            <Banner></Banner>
            <section className='home-services my-3'>
                <h1 className='fst-italic text-center'>My Services - <small className=' text-primary'>types of psychotherapy</small></h1>
                <div className='home-services-container'>
                    {
                        fullData.map(data => <Service
                            key={data.id}
                            data={data}
                        >
                        </Service>)
                    }
                </div>
            </section>
            <Achivements></Achivements>
            <Footer></Footer>
        </section>
    );
};

export default Home;