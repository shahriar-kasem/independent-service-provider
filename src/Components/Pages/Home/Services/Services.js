import useServices from '../../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
        const [fullData] = useServices();

    return (
        <section className='my-3'>
            <h1 className='fst-italic text-center'>My Services - <small className=' text-primary'>types of psychotherapy</small></h1>
            <div className='services-container'>
            {
                fullData.map(data => <Service
                key={data.id}
                data={data}
                >
                </Service>)
            }
            </div>
        </section>
    );
};

export default Services;