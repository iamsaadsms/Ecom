import React from "react";
import './Navbar.css';
import logo from "../Media/logo.JPG";
import Navtabs from "./Navtabs/Navtabs";

const Navbar = () => {
    return(
        <div className="Navbar">
            <div className="logos">
                <div className="logo-head">
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="user-logo">
                    <div>
                        <i class="bi bi-person user"></i>
                    </div>
                    <div>
                        <i class="bi bi-bag user"></i>
                    </div>
                </div>
            </div>
            <Navtabs />
        </div>
    )
}

export default Navbar;