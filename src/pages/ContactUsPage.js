import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { useState } from 'react';

export const ContactUsPage = () => {
    const [data, setData] = useState("")
    return (
        <div>
            <Header setData={setData} />
            <ContactUs />
            <Footer />

        </div>
    )
}

export default ContactUsPage;