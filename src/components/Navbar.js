import React, {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

export default function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div>
            <ul className="Navbar">
                <div>
                    <h1 className="navbar-header">dev.Navbar</h1>
                </div>
                <nav ref={navRef} activeClassName="active" className="nav-links">
                    <li className="Navbar-link">Home</li>
                    <li className="Navbar-link">About</li>
                    <li className="Navbar-link">Projects</li>
                    <li className="Navbar-link">Contact</li>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </ul>
        </div>
    )
}