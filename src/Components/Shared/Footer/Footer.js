import React from 'react';
import './Footer.css';

const Footer = () => {
const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const fullDate = day +'/'+ month+'/'+year;
    return (
        <div className='footer-container'>
            <p className='pt-2'>© All rights reserved. {fullDate} </p>
        </div>
    );
};

export default Footer;