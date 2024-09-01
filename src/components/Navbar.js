import React, {useRef, useEffect, useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";

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
                    <Link
                        to="home">
                        <li className="Navbar-link">Home</li>
                    </Link>
                    <Link
                        className="Navbar-link"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        <li className="Navbar-link">About</li>
                    </Link>
                    <Link
                        className="Navbar-link"
                        activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        <li className="Navbar-link">Education</li>
                    </Link>
                    <Link
                        className="Navbar-link"
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        <li className="Navbar-link">Experience</li>
                    </Link>
                    <Link to="projects"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                        <li className="Navbar-link">Projects</li>
                    </Link>
                    <Link to="contacts"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                        <li className="Navbar-link">Contact</li>
                    </Link>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </ul>
        </div>
    );
}
