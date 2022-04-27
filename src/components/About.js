import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';

export const About = () => {
    const [data, setData] = useState([{
        "id": 0,
        "name": "",
        "description": "",
        "list": []
    }]);
    return (
        <div>
            <Header setData={setData} />
            <div id="mid-wrap">
                <div className="container">
                    <h4 className="display-4 text-center">About Us</h4>
                    <div className="static-content-wrap">
                        <p>Few sentences about the company. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi omnis hic unde non, doloribus facilis similique iste nulla laborum rerum debitis recusandae consequuntur minima aspernatur enim dolor? Assumenda, dolore iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi omnis hic unde non, doloribus facilis similique iste nulla laborum rerum debitis recusandae consequuntur minima aspernatur enim dolor? Assumenda, dolore iusto.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi omnis hic unde non, doloribus facilis similique iste nulla laborum rerum debitis recusandae consequuntur minima aspernatur enim dolor? Assumenda, dolore iusto.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi omnis hic unde non, doloribus facilis similique iste nulla laborum rerum debitis recusandae consequuntur minima aspernatur enim dolor? Assumenda, dolore iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi omnis hic unde non, doloribus facilis similique iste nulla laborum rerum debitis recusandae consequuntur minima aspernatur enim dolor? Assumenda, dolore iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi omnis hic unde non, doloribus facilis similique iste nulla laborum rerum debitis recusandae consequuntur minima aspernatur enim dolor? Assumenda, dolore iusto.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi omnis hic unde non, doloribus facilis similique iste nulla laborum rerum debitis recusandae consequuntur minima aspernatur enim dolor? Assumenda, dolore iusto.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi omnis hic unde non, doloribus facilis similique iste nulla laborum rerum debitis recusandae consequuntur minima aspernatur enim dolor? Assumenda, dolore iusto.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;