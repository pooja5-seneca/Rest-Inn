import React from 'react';
import '../scss/header.scss';
import img2 from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
import SetCookies from '../cookies/SetCookies';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ setData }) => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        if (SetCookies.get('login')) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }, [])
        ;
    const logOut = (event) => {
        event.preventDefault();
        SetCookies.remove('login');
        setToggle(false)
        navigate('/');
    }
    const [type, setType] = useState("");
    const [err, setErr] = useState("");

    const handleClick = async () => {

        let data = await fetch("https://restinn-hotel-booking.herokuapp.com/properties/" + type.toLowerCase())
        if (data.status !== 200) {
            setErr("Does Not Exist");
            setData([{
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
            ]);
            navigate(`/properties/${type}`);
        } else {
            data = await data.json()
            setData(data)
            setErr("")
            navigate(`/properties/${type}`)
        }
    }
    {
        return (
            (toggle) ?
                (
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                            <div className="container-fluid d-flex justify-content-between navbar-collapse">
                                <a className="navbar-brand m" href="/">
                                    < img src={img2} className="card-img-top" alt="..." />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <ul className="navbar-nav mb-2 mb-lg-0 mr-auto">
                                    <li className="nav-item home active">
                                        <Link className="nav-link" to="/">Home </Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link to="/properties" className="nav-link" >Properties</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/dashboard" className="nav-link" >Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link" >About</Link>
                                    </li>
                                </ul>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className='form'>
                                        <input className="form-control me-2" type="search" placeholder="Search" defaultValue={err}
                                            onChange={(e) => {
                                                e.preventDefault();
                                                setType(e.target.value);

                                            }} aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
                                    </div>
                                    {/* {
                                        (err !== "") ? (<div>{err}</div>) : ""
                                    } */}

                                    <ul className="navbar-nav mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <button onClick={logOut} className="nav-link dropbtn1" >Logout</button>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav >

                    </div >
                ) : (
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                            <div className="container-fluid d-flex justify-content-between">
                                <a className="navbar-brand m" href="/">
                                    < img src={img2} className="card-img-top" alt="..." />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item home active">
                                        <Link className="nav-link" to="/">Home </Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link to="/properties" className="nav-link" >Properties</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link" >About</Link>
                                    </li>
                                </ul>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className='form'>
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => {
                                            e.preventDefault()
                                            setType(e.target.value)
                                        }} />
                                        <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
                                    </div >
                                    {
                                        (err !== "") ? (<div>{err}</div>) : ""
                                    }
                                    <ul className="navbar-nav mb-2 mb-lg-0">

                                        <li className="nav-item dropdown">
                                            <div className="dropdown">
                                                <button className="dropbtn">Login/Signup</button>
                                                <div className="dropdown-content">
                                                    <Link to="/login">Login</Link>
                                                    <Link to="/signup">Signup</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav >
                    </div >
                )
        );
    }
}
export default Header;