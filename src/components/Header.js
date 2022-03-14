import React from 'react';
import '../scss/header.scss';
import img2 from '../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
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
                        <form className="d-flex me-auto">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <div class="dropdown">
                                    <button class="dropbtn">Login/Signup</button>
                                    <div class="dropdown-content">
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
    );
}
export default Header;