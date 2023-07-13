import React, { useRef, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const navRef = useRef();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const showNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    useEffect(() => {
        if (isNavbarOpen) {
            document.body.style.overflow = "hidden"; // Prevent scrolling when navbar is open
        } else {
            document.body.style.overflow = "auto"; // Restore scrolling when navbar is closed
        }
    }, [isNavbarOpen]);

    return (
        <div>
            <ul className="Navbar">
                <div>
                    <h1 className="navbar-header">dev.Asyad</h1>
                </div>
                <nav ref={navRef} className={`nav-links ${isNavbarOpen ? "responsive_nav" : ""}`}>
                    <li className="Navbar-link">Home</li>
                    <li className="Navbar-link">About</li>
                    <li className="Navbar-link">Projects</li>
                    <li className="Navbar-link">Contact</li>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </ul>
        </div>
    );
}
