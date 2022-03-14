import React from 'react';
import PropertyList from '../components/PropertyList';
import BestsellerList from '../components/BestsellerList';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


export const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <PropertyList />
            <BestsellerList />
            <Footer />
        </div>
    )
}

export default HomePage;