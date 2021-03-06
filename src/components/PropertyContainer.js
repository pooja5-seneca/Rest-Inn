import React from 'react';
import '../scss/propertyContainer.scss';
import { Link } from 'react-router-dom';
//import img1 from '../assets/images/1.jpg'
import { useState, useEffect } from 'react';

const PropertyContainer = (props) => {
    const [data, setData] = useState({ "id": "" })
    useEffect(() => {
        setData(props.element)
    }, []);
    return (
        <div>
            <div className="card   "  >
                <div className='row'>
                    <div className='col-4'>
                        <img className="card-img" src={props.element.propertyImg} alt="Card image cap" />
                    </div>
                    <div className='col-4'>
                        <div className="card-body">
                            <div className='name'>
                                <h5 className="card-title">{props.element.propertyTitle}</h5>
                            </div>
                            <div className='keypoint'>
                                <h6>Pros:</h6>
                                <ul>
                                    <li>Luxurious place to stay</li>
                                    <li>All amenities inluded</li>
                                </ul>
                            </div>
                            <div className='rating'>
                                <span className="badge bg-success">8.3</span>
                                <span><b>Great place</b></span>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='goto'>
                            <span className='price'><b> {props.element.propertyPrice}</b></span>
                            <p className='text-success'>free cancellation</p>
                            <Link to={`/propertyDescription/${props.element.propertyId}`} className="btn btn-primary rounded-pill">Book Now </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PropertyContainer;