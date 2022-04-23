import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyDescription from '../components/PropertyDescription';
import { useState } from 'react';

export const PropertyDescriptionPage = () => {
    const [data, setData] = useState("")
    return (
        <div>
            <Header setData={setData} />
            <PropertyDescription />
            <Footer />

        </div>
    )
}

export default PropertyDescriptionPage;