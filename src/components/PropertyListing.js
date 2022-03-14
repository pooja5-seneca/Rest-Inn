import React from 'react';
import '../scss/propertyListing.scss'
import FilteredData from '../components/FilteredData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Filter from './Filter';
import Header from './Header.js';
import Footer from './Footer.js';

const PropertyListing = () => {
    let params = useParams();
    const [data, setData] = useState([{
        "id": 0,
        name: "",
        description: "",
        list: []
    }
    ])
    useEffect(() => {
        fetch("http://localhost:5000/property_list").then(response => response.json()).then(json => {
            let abc = json.filter((element) => element.id == parseInt(params.id))
            setData(abc);
        }).catch(err => {
            console.log(err);
        })

    }, [])
    return (
        <div>
            <header><Header /></header>
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
