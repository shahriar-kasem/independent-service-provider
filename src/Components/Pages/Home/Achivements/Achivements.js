import React from 'react';
import achivements from '../../../../images/achivements/achivements.jpg';
import './Achivements.css';

const Achivements = () => {
    return (
        <section className='achivements-container mb-4'>
            <h1 className='text-center fst-italic fw-bolder text-success my-4'>My Achivements</h1>
            <div className='d-flex justify-content-around align-items-center flex-md-column flex-lg-row flex-sm-column flex-column mx-2'>
                <div className='d-flex justify-content-center align-items-center w-50'>
                    <img style={{width: '400px'}} src={achivements} alt="" />
                </div>
                <div className='fst-italic w-50'>
                    <p className='me-5 mt-2 text-primary'>I'm a Distinguished Fellow of the Bangladesh Psychiatric Association. I also been an assistant clinical professor of psychiatry and human behavior in the University of California, Irvine, College of Medicine. I write more than 30 books with combined sales of about one million copies.</p>
                    <button className='btn btn-primary'>Read more</button>
                </div>
            </div>

        </section>
    );
};

export default Achivements;