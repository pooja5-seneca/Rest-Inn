import React from 'react';
import '../scss/login.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SetCookies from '../cookies/SetCookies';

const Login = () => {
    const [login, setLogin] = useState(true)
    const [email, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigate()
    const handleClick = () => {
        let result = { email, password };
        fetch("https://restinn-hotel-booking.herokuapp.com/customer/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(result)
        }).then(async (response) => {
            if (response.status !== 200) {
                setLogin(false);
                setPassword("");
            }
            else {
                response = await response.json();
                SetCookies.set("login", response, { "path": "/" })
                navigation("/")
            }

        }

        )
    }
    return (
        <div id="mid-wrap" >
            <br />

            <div className="col-md-4 offset-md-4 form2">
                <div className=" border border-dark rounded-3">
                    <div className="p-5">
                        <div className="text-center">
                            <h2> Login</h2>
                        </div>
                        <div className='form'>
                            {
                                (login === false) ? (
                                    <>
                                        <div><b>Unsuccessful login, Please try again</b></div>
                                    </>
                                ) : ""
                            }
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Your Email Address" onChange={(e) => { setUserName(e.target.value) }} />
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Your Password" onChange={(e) => { setPassword(e.target.value) }} />
                            <div className="mb-4 text-center p-5 ">
                                <button type="submit" className="btn btn-success" onClick={handleClick}>Login</button>
                            </div>
                        </div>
                        <div className="text-center"><a href="/forgotpassword"> Forgot Your Password? </a></div>
                    </div>
                </div>
            </div>
            <br />
        </div >

    );
}

export default Login;
