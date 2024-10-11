import React from "react";
import './Footer.css';
import logo from '../Media/logo.JPG'

const Footer = () => {
    return(
        <>
            <div className="Footer">
                <div className="company-logos">
                    <img src={logo} className="c-logo" alt="logo" />
                    <i class="bi bi-c-circle copy">2024 All Rights Reserved</i>
                </div>
                <div className="about">
                <span className="fhead">ABOUT</span>
                    <span className="fcontents">About Us</span>
                </div>
                <div className="customer-support about">
                    <span className="fhead">CUSTOMER SUPPORT</span>
                    <span className="fcontents">Contact Us</span>
                    <span className="fcontents">Shipping Policy</span>
                    <span className="fcontents">Return & Exchange Policy</span>
                </div>
                <div className="social-links">
                    <span className="fhead">CONNECT WITH US</span>
                    <div className="s-links">
                        <i class="bi bi-whatsapp social what"></i>
                        <i class="bi bi-facebook social face"></i>
                    </div>
                </div>
            </div>
            <div className="create">
                <span className="bluepexel">CREATED BY</span>
                <a className="bluepexel"> BACKTREQ.</a>
            </div>
        </>
    )
}

export default Footer;