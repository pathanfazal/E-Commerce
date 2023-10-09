import React from "react";
import "./Newsletter.scss";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Newsletter = () => {
    return (
    <div className="newsletter-section">
    <div className="newsletter-content">
        <span className="small-text">NewsLetter</span>
        <span className="bigtext">
            Sign up latest updates and Offers
        </span>
        <div className="form">
            <input type="text" placeholder="Email Address" />
            <button>Subsribe</button>
        </div>
        <div className="text">Will be used in Accordance with our Privacy Policy</div>
        <div className="social-icons">
            <div className="icon">
                <FaFacebookF size={14}/>
            </div>
            <div className="icon">
                <FaTwitter size={14}/>
            </div>
            <div className="icon">
                <FaInstagram size={14}/>
            </div>
            <div className="icon">
                <FaLinkedinIn size={14}/>
            </div>
        </div>
    </div>
</div>
);

};

export default Newsletter;
