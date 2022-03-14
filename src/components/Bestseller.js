import React from 'react';
import { Link } from 'react-router-dom';
//import img1 from '../assets/images/3.jpg';

export const Bestseller = ({ id, name, description, img }) => {
    return (
        <div className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 c2">
            <Link to={`/propertyDescription/${id}`} >
                < img src={img} className="card-img-top" alt="..." /> </Link>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}
