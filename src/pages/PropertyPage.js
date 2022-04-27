import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Properties from '../components/Properties';
import { useState } from 'react';

function PropertyPage() {
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
    return (
        <div>
            <Header setData={setData} />
            <Properties setData={setData} data={data} />
            <Footer />
        </div>
    )
}

export default PropertyPage;