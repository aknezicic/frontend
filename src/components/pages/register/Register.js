import React from "react"
import './Register.css';
import {Link} from 'react-router-dom';

const Register = () => {

    return(
    <>
        <div className="body-register"> 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 register-intro">
                        <h1>Welcome to MNTN</h1>
                        <h2 className="mb-4">Be prepared for the Mountains and beyond!</h2>
                        <img src="/img/group.png" alt="a hiker walking along a hiking trail surrounded by wonderful views of the surrounding mountains" className="group-register" />
                    </div>
                    <div className="col-md-6 register-form">
                        <div>
                            <h3>Create your account</h3>
                            <h4 className="mb-4">It’s free and easy</h4>
                            <form action="/login">
                                <label>Full Name</label>
                                <input type="text" id="name" placeholder="Enter your name" className="mb-4" />
                                <label>E-mail or phone number</label>
                                <input type="text" id="e-mail/phone-number" placeholder="Type your e-mail or phone number" className="mb-4" />
                                <label>Password</label>
                                <input type="password" id="password" placeholder="Type your password" />
                                <label className="checkbox d-block my-4">
                                <input type="checkbox" />
                                By creating an account means you agree to the <Link to="/">Terms and Conditions</Link>, and our <Link to="/">Privacy Policy</Link>
                                </label>
                                <button type="submit">Sign Up</button>
                                <div className="sign-in">
                                    <p>Don’t have an account?</p>
                                    <Link to="/register" data-discover="true">Sign In</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
       );
    };
    
    export default Register;
    