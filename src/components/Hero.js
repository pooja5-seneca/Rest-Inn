import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../scss/hero.scss';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';


const Hero = () => {
    return (
        <Carousel className='carousel' >
            <div>
                <img src={img1} />

            </div>
            <div>
                <img src={img2} />

            </div>
            <div>
                <img src={img3} />

            </div>
            <div>
                <img src={img4} />

            </div>
            <div>
                <img src={img5} />

            </div>
            <div>
                <img src={img6} />

            </div>
        </Carousel>
    )
}

export default Hero;