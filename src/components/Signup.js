import React from 'react';
import '../scss/signup.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Signup = () => {
    const [login, setLogin] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate()
    const handleClick = () => {
        let result = { name, email, password }
        fetch("http://localhost:5000/customer/registration", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(result)
        }).then(response => {
            if (response.status !== 200) {
                setLogin(false)
            }
            else {
                navigation("/login")
            }

        }

        )
    }
    return (
        <div id="mid-wrap">
            <br />
            <div class="col-md-4 offset-md-4 form1">

                <div>
                    <div class=" border border-dark rounded-3">
                        <div class="p-4">
                            <div class="text-center">
                                <h2>Signup </h2>
                                <br />
                            </div>

                            <label for="name" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="name" placeholder="i.e. Smith, John" onChange={(e) => setName(e.target.value)} />
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Your Email Address" onChange={(e) => setEmail(e.target.value)} />
                            <label for="password" class="form-label">password</label>
                            <input type="password" class="form-control" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                            <label for="address" class="form-label">confirm password</label>
                            <input type="password" class="form-control" id="cpassword" placeholder="confirm password" />
                            <div class="mb-4 text-center p-2">
                                <button type="submit" class="btn btn-success" onClick={handleClick}>Register</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default Signup;
