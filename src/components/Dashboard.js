import React from 'react';
import '../scss/dashboard.scss';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import SetCookies from '../cookies/SetCookies';

const Dashboard = () => {
    return (
        <>
            <Header />
            <div id="mid-wrap">
                <br />
                <div class="col-md-4 offset-md-4 form1">

                    <div>
                        <div >
                            <div class="p-4">
                                <div class="text-center">
                                    <h2>User Dashboard </h2>
                                    <br />
                                </div>

                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="name" defaultValue={SetCookies.get('login').name} readOnly />
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" defaultValue={SetCookies.get('login').email} readOnly />
                                <label for="email" class="form-label">Address</label>
                                <input type="email" class="form-control" id="address" defaultValue={SetCookies.get('login').address} readOnly />
                                <br /><br />
                                <h5 >To browse our properties please go to home page
                                    <Link className="nav-link" to="/" >Home </Link>
                                </h5>


                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;