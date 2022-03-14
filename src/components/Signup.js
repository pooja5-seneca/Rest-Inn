import React from 'react';
import '../scss/signup.scss';

const Signup = () => {
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
                            <form method="post" action="/register">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="name" placeholder="i.e. Smith, John" />
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Your Email Address" />
                                <label for="email" class="form-label">Confirm Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Confirm Your Email Address" />
                                <label for="address" class="form-label">Address</label>
                                <input type="text" class="form-control" id="address" placeholder="Your Address" />
                                <div class="mb-4 text-center p-2">
                                    <button type="submit" class="btn btn-success">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default Signup;
