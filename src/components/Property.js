import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/property.scss';
//import img1 from '../assets/images/1.jpg';

const Property = ({ id, img, name, description, type }) => {
    return (
        <div className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 c2">
            <Link to={`/property-listing/${type}`}>
                < img src={img} className="card-img-top" alt="/" />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default Property;