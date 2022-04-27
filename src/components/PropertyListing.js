import React from 'react';
import '../scss/propertyListing.scss'
import FilteredData from '../components/FilteredData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Filter from './Filter';
import Header from './Header.js';
import Footer from './Footer.js';
import { useLocation } from 'react-router-dom';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

const PropertyListing = () => {
    let params = useParams();
    const [data, setData] = useState([{
        propertyId: "",
        propertyImg: "",
        propertyTitle: "",
        propertyDesc: "",
        propertyPrice: "",
        propertyLocation: { streetAddress: "", city: "", state: "", country: "", zip: "" },
        propertyType: "",
        propertyRules: "",
        propertyAmenities: "",
        bestseller: false
    }
    ])

    useEffect(() => {
        fetch("https://restinn-hotel-booking.herokuapp.com/properties/" + params.type).then(response => response.json()).then(json => {
            setData(json);
        }).catch(err => {
            console.log(err);
        })

    }, [])

    return (
        <div>
            <header><Header setData={setData} /></header>
            <main>
                <div className='parent'>
                    <Filter />
                    <FilteredData data={data} />
                </div>
            </main>
            <footer><Footer /></footer>
        </div>
    );
}

export default PropertyListing;
