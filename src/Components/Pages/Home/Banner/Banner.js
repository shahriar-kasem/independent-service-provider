import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import psychotherapy1 from '../../../../images/banner/psychotherapy1.jpg';
import psychotherapy2 from '../../../../images/banner/psychotherapy2.jpg';
import psychotherapy3 from '../../../../images/banner/psychotherapy3.jpg';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={psychotherapy1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Royals Therapy</h3>
                        <p>Increasing the strength of our minds is the only way to reduce the difficulty of life.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={psychotherapy2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Royals Therapy</h3>
                        <p>Being able to be your true self is one of the strongest components of good mental health.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={psychotherapy3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Royals Therapy</h3>
                        <p>This feeling will pass. The fear is real but the danger is not.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;