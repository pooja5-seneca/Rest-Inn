import React from 'react'

export const ContactUs = () => {
    return (
        <div id="mid-wrap">

            <div class="container-lg my-5">
                <div class="row">
                    <div class="col-6 border border-success rounded-3 ">
                        <div class="row">
                            {/* <img src="/images/contact-us-pic.jpg" alt="contact pic" /> */}
                        </div>
                        <div class="row">
                            <div>
                                <br />
                                <br />
                                <h4>Contact Us</h4>
                                <br />
                                <p>Mail Address: 1 Yonge street, Toronto, Canada</p>
                                <br />
                                <p>Phone: 416-555-5555</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 border border-success rounded-3">
                        <div class="container-lg my-5">
                            <div class="text-center">
                                <h2> Contact Form</h2>
                            </div>
                            <div class="row justify-content-center my-5">
                                <form>
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="YourName" />
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Your Email Address" />
                                    <div class="form-floating mb-4 mt-5">
                                        <textarea class="form-control" id="message" style="height: 140px;"> </textarea>
                                        <label for="message">Type Your Message Here:</label>
                                    </div>
                                    <div class="mb-4 text-center">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;