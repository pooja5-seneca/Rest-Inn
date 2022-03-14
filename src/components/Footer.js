import React from 'react';
import '../scss/footer.scss';
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='row'>
                <div className='col-3'>
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Hotel booking</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Cancellation Optons</a></li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h3>Community</h3>
                    <ul>
                        <li><a href="#">Disaster relief housing</a></li>
                        <li><a href="#">Combating discrimination</a></li>
                        <li><a href="#">Employee Support</a></li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Legacy</a></li>
                    </ul>
                </div>

                <div className='col-3 icons '>
                    <a href="#"><FaFacebook size='2rem' /></a>
                    <a href="#"><FaTwitterSquare size='2rem' /></a>
                    <a href="#"><FaSnapchat size='2rem' /></a>
                    <a href="#"><FaInstagram size='2rem' /></a>
                    <p class="copyright">Airbnb © 2000</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;