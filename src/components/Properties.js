import React from 'react';
import '../scss/properties.scss'
import PropertyContainer from './PropertyContainer';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Properties = ({ setData, data }) => {
    let params = useParams()
    let a = [];
    let count = 0;

    useEffect(() => {
        let url = (params.data) ? "http://localhost:5000/properties/" + params.data : "http://localhost:5000/properties"
        fetch(url).then(response => response.json()).then(json => {
            setData(json);
        }).catch(err => {
            console.log(err);
        })

    }, [])

    return (
        <div className='filtered'>
            <div className='sort '>
                <br />
                <div className='sortby'>
                    <p className='para'><b>sort by</b></p>
                    <div className='dropdown'><button className="btn btn-secondary" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false" >Featured</button></div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Star Rating
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Abc</a>
                                <a className="dropdown-item" href="#">Abc</a>
                                <a className="dropdown-item" href="#">abc</a>
                            </div>
                        </button>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Distance
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Abc</a>
                                <a className="dropdown-item" href="#">Abc</a>
                                <a className="dropdown-item" href="#">abc</a>
                            </div>
                        </button>
                    </div>
                    <div className='dropdown'>  <button className="btn btn-secondary " type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false" >Guest Rating</button></div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Price
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Abc</a>
                                <a className="dropdown-item" href="#">Abc</a>
                                <a className="dropdown-item" href="#">abc</a>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='result'>
                {/* {props.data[0].list?.map((element, key) => (
                    <div key={key}>
                        <PropertyContainer element={element} />
                    </div>
                ))} */}
                {
                    data.map((element1) => {
                        return (
                            <PropertyContainer element={element1} />
                        );

                    })
                }
            </div>

        </div>
    );
}

export default Properties;