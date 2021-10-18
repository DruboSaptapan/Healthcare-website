import React from 'react';

import map from './images/maps.png'

// import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
            <div className="row m-5 no-gutters shadow-lg align-items-center">
                <div className="col-md-6 d-none d-md-block">
                    <img src={map} alt="" />
                </div>
                <div className="col-md-6 bg-white p-5">
                    <h4 className="pb-3 text-start">Get in Touch 24/7</h4>
                    <div className="form-style">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Rudra Barua" />
                                <label htmlFor="floatingInput">Your name</label>
                            </div>

                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}}></textarea>
                                <label htmlFor="floatingTextarea2">Type your message here...</label>
                            </div>

                            <div className="pb-2">
                                <button className="btn btn-primary w-100 fw-normal mt-2 rounded">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;