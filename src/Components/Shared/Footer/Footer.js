import React from 'react';
import './Footer.css';

const Footer = () => {
const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const fullDate = day +'/'+ month+'/'+year;
    return (
        <footer  className='footer-container pt-2'>
            <div>
            <p className='mb-0'>Email: rksroyeltherapy@gmail.com</p>
            <p className='mb-0'>Phone: 01345140093</p>
            <p className='footer-text'>© All rights reserved. {fullDate} </p>
            </div>
        </footer>
    );
};

export default Footer;