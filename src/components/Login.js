import React from 'react';
import '../scss/login.scss';

const Login = () => {
    return (
        <div id="mid-wrap" >
            <br />
            <div class="col-md-4 offset-md-4 form2">
                <div class=" border border-dark rounded-3">
                    <div class="p-5">
                        <div class="text-center">
                            <h2> Login</h2>
                        </div>
                        <form method="post" action="/login">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Your Email Address" />
                            <label for="password" class="form-label">Password</label>
                            <input type="text" class="form-control" id="password" placeholder="Your Password" />
                            <div class="mb-4 text-center p-5 ">
                                <button type="submit" class="btn btn-success">Login</button>
                            </div>
                        </form>
                        <div class="text-center"><a href="/forgotpassword"> Forgot Your Password? </a></div>
                    </div>
                </div>
            </div>
            <br />
        </div >

    );
}

export default Login;
