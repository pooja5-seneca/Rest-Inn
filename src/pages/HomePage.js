import React from 'react';
import PropertyList from '../components/PropertyList';
import BestsellerList from '../components/BestsellerList';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { useState } from 'react';


export const HomePage = () => {
    const [data, setData] = useState("")
    return (
        <div>
            <Header setData={setData} />
            <Hero />
            <PropertyList />
            <BestsellerList />
            <Footer />
        </div>
    )
}

export default HomePage;