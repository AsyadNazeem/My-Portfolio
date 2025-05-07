import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
    const navRef = useRef();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const showNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    useEffect(() => {
        if (isNavbarOpen) {
            document.body.style.overflow = "hidden"; // Prevent scrolling when navbar is open
        } else {
            document.body.style.overflow = "auto"; // Restore scrolling when navbar is closed
        }
    }, [isNavbarOpen]);

    return (
        <header className="Navbar">
            <div className="navbar-logo">
                <h1 className="navbar-header">dev.Asyad</h1>
            </div>
            <nav ref={navRef} className={isNavbarOpen ? "responsive_nav" : ""}>
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-item"
                    onClick={closeNavbar}
                >
                    <li className="Navbar-link">Home</li>
                </Link>
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-item"
                    activeClass="active"
                    onClick={closeNavbar}
                >
                    <li className="Navbar-link">About</li>
                </Link>
                <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-item"
                    activeClass="active"
                    onClick={closeNavbar}
                >
                    <li className="Navbar-link">Education</li>
                </Link>
                <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-item"
                    activeClass="active"
                    onClick={closeNavbar}
                >
                    <li className="Navbar-link">Experience</li>
                </Link>
                <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-item"
                    activeClass="active"
                    onClick={closeNavbar}
                >
                    <li className="Navbar-link">Projects</li>
                </Link>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-item"
                    activeClass="active"
                    onClick={closeNavbar}
                >
                    <li className="Navbar-link">Contact</li>
                </Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}
