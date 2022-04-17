import React from 'react';
import './NotFound.css';
import error404 from '../../images/error/error404.png';

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <h1 className='text-danger'>Not Found! 404</h1>
            <p className='text-danger'>The page you are looking for is not available.</p>
            <img className='img-fluid' src={error404} alt="" />
        </div>
    );
};

export default NotFound;