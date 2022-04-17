import React from 'react';
import './Footer.css';

const Footer = () => {
const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const fullDate = day +'/'+ month+'/'+year;
    return (
        <footer  className='footer-container'>
            <p className='footer-text'>© All rights reserved. {fullDate} </p>
        </footer>
    );
};

export default Footer;