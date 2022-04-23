import React from 'react'
import SetCookies from '../cookies/SetCookies'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export const Logout = () => {
    useEffect(() => {
        SetCookies.remove('login')
    }, [])

    return (
        <>
            <Header />
            <div>if you want login <Link to="/login">click here</Link></div>
            {/* <Home /> */}
            <Footer />
        </>
    )
}
