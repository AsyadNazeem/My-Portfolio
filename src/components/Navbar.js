import React, {useEffect, useRef, useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";
import {Sparkles} from "lucide-react";
import DarkModeToggle from './DarkModeToggle';
import {useDarkMode} from './DarkModeContext';

export default function Navbar() {
    const navRef = useRef();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const {isDarkMode} = useDarkMode();

    const showNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    useEffect(() => {
        if (isNavbarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isNavbarOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Mobile Overlay */}
            {isNavbarOpen && <div className="mobile-overlay" onClick={closeNavbar}></div>}

            <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="navbar-logo">
                        <Sparkles className="logo-icon"/>
                        <h1 className="navbar-header">dev.Asyad</h1>
                    </div>

                    {/* Desktop Nav */}
                    <nav ref={navRef} className={`navbar-menu ${isNavbarOpen ? 'responsive_nav' : ''}`}>
                        <Link to="home" spy smooth offset={-70} duration={500} className="nav-item" activeClass="active"
                              onClick={closeNavbar}>
                            <span className="nav-link">Home</span>
                        </Link>
                        <Link to="about" spy smooth offset={-70} duration={500} className="nav-item"
                              activeClass="active" onClick={closeNavbar}>
                            <span className="nav-link">About</span>
                        </Link>
                        <Link to="education" spy smooth offset={-70} duration={500} className="nav-item"
                              activeClass="active" onClick={closeNavbar}>
                            <span className="nav-link">Education</span>
                        </Link>
                        <Link to="projects" spy smooth offset={-70} duration={500} className="nav-item"
                              activeClass="active" onClick={closeNavbar}>
                            <span className="nav-link">Projects</span>
                        </Link>

                        {/* Dark Mode Toggle — visible only in desktop nav */}
                        <div className="nav-item darkmode-desktop">
                            <DarkModeToggle/>
                        </div>
                        <Link to="contact" spy smooth offset={-70} duration={500} className="nav-item contact-button"
                              activeClass="active" onClick={closeNavbar}>
                            <span className="nav-link">Contact</span>
                        </Link>

                        <button className="nav-close-btn" onClick={showNavbar}>
                            <FaTimes/>
                        </button>
                    </nav>

                    {/* Right Controls — for mobile only */}
                    <div className="navbar-controls">
                        <div className="darkmode-mobile">
                            <DarkModeToggle/>
                        </div>
                        <button className={`nav-toggle-btn ${isNavbarOpen ? 'hidden' : ''}`} onClick={showNavbar}>
                            <FaBars/>
                        </button>
                    </div>
                </div>
            </header>


            <style jsx>{`
                .navbar-controls {
                    display: none;
                !important; /* Hide entire controls container on desktop */
                }


                .darkmode-mobile {
                    display: none;
                !important;
                }

                .darkmode-desktop {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 8px;
                }

                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                    z-index: 1000;
                    transition: all 0.3s ease;
                    background: ${isDarkMode
                            ? 'rgba(15, 23, 42, 0.95)'
                            : 'rgba(255, 255, 255, 0.95)'};
                    color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
                }

                .navbar.scrolled {
                    background: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    background: ${isDarkMode
                            ? 'rgba(15, 23, 42, 0.95)'
                            : 'rgba(255, 255, 255, 0.95)'};
                    color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
                }


                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                //.navbar-controls {
                //    display: flex;
                //    align-items: center;
                //    justify-content: flex-end; /* ✅ ensures right alignment */
                //    gap: 10px;
                //}

                /* Logo */
                .navbar-logo {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                    z-index: 1002;
                    position: relative;
                    justify-self: start;
                }

                .logo-icon {
                    width: 24px;
                    height: 24px;
                    color: #3498db;
                    animation: sparkle 2s ease-in-out infinite;
                }

                @keyframes sparkle {
                    0%, 100% {
                        transform: rotate(0deg) scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: rotate(180deg) scale(1.1);
                        opacity: 0.8;
                    }
                }

                .navbar-header {
                    font-size: 24px;
                    font-weight: 700;
                    background: linear-gradient(135deg, #3498db 0%, #8b5cf6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin: 0;
                    letter-spacing: -0.5px;
                }

                /* Navigation Menu */
                .navbar-menu {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    justify-self: center;
                }

                .nav-item {
                    position: relative;
                    cursor: pointer;
                    text-decoration: none;
                }

                .nav-link {
                    display: block;
                    padding: 10px 20px;
                    font-size: 15px;
                    font-weight: 600;
                    color: #2c3e50;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .nav-item:hover .nav-link {
                    color: #3498db;
                    background: rgba(52, 152, 219, 0.08);
                }

                /* Active state */
                .nav-item.active .nav-link {
                    color: #3498db;
                }

                .nav-item.active .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 5px;
                    left: 20px;
                    right: 20px;
                    height: 2px;
                    background: linear-gradient(135deg, #3498db 0%, #8b5cf6 100%);
                    border-radius: 2px;
                }

                /* Contact Button */
                .contact-button .nav-link {
                    background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
                    color: white;
                    padding: 10px 24px;
                    margin-left: 8px;
                }

                .contact-button:hover .nav-link {
                    background: linear-gradient(135deg, #2980b9 0%, #1c5d8b 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
                }

                .contact-button.active .nav-link::after {
                    display: none;
                }

                /* Mobile Toggle Button */
                .nav-toggle-btn {
                    display: none;
                    background: none;
                    border: none;
                    font-size: 24px;
                    color: #2c3e50;
                    cursor: pointer;
                    padding: 8px;
                    z-index: 998;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .nav-toggle-btn:hover {
                    color: #3498db;
                    transform: scale(1.1);
                }

                .nav-toggle-btn.hidden {
                    opacity: 0;
                    pointer-events: none;
                }

                /* Close Button (Mobile) */
                .nav-close-btn {
                    display: none;
                    position: absolute;
                    top: 25px;
                    right: 25px;
                    background: none;
                    border: none;
                    font-size: 28px;
                    color: #2c3e50;
                    cursor: pointer;
                    padding: 8px;
                    z-index: 1003;
                    transition: all 0.3s ease;
                }

                .nav-close-btn:hover {
                    color: #e74c3c;
                    transform: rotate(90deg);
                }

                /* Mobile Overlay */
                .mobile-overlay {
                    display: none;
                }

                /* Responsive Design */
                @media (max-width: 968px) {
                    .navbar-container {
                        padding: 18px 24px;
                    }


                    .darkmode-desktop {
                        display: none;
                    }


                    /* Mobile toggle only visible in mobile */
                    .darkmode-mobile {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .nav-toggle-btn {
                        display: block;
                    }

                    .navbar-controls {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        gap: 10px;
                    }

                    /* Mobile Overlay */
                    .mobile-overlay {
                        display: block;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        background: rgba(0, 0, 0, 0.5);
                        z-index: 999;
                        animation: fadeIn 0.3s ease;
                        backdrop-filter: blur(2px);
                    }

                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }

                    .navbar-menu {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 600px;
                        height: 100vh;
                        /* ✨ Updated here */
                        background: ${isDarkMode ? 'rgba(15, 23, 42, 0.98)' : 'white'};
                        color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 8px;
                        box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
                        transition: right 0.4s ease;
                        padding: 40px 0;
                        z-index: 1002;
                    }

                    .navbar-menu.responsive_nav {
                        right: 0;
                    }

                    .nav-close-btn {
                        display: block;
                        color: ${isDarkMode ? '#f1f5f9' : '#2c3e50'};
                    }

                    .nav-item {
                        width: 90%;
                        text-align: center;
                        padding: 0;
                    }

                    .nav-link {
                        padding: 16px 24px;
                        font-size: 16px;
                        border-radius: 8px;
                        width: 80%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: ${isDarkMode ? '#f1f5f9' : '#2c3e50'};
                        background: transparent;
                        transition: all 0.3s ease;
                    }

                    .nav-item.active .nav-link {
                        background: ${isDarkMode
                                ? 'rgba(52, 152, 219, 0.15)'
                                : 'rgba(52, 152, 219, 0.08)'};
                        border-left: 4px solid #3498db;
                    }

                    .contact-button .nav-link {
                        margin: 12px 0 0 0;
                        border-radius: 8px;
                        width: 80%;
                        background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
                        color: white;
                    }

                    .contact-button.active .nav-link {
                        background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
                        border-left: none;
                    }
                }


                @media (max-width: 640px) {
                    .navbar-container {
                        padding: 16px 20px;
                    }

                    .navbar-header {
                        font-size: 20px;
                    }

                    .logo-icon {
                        width: 20px;
                        height: 20px;
                    }

                    .navbar-menu {
                        width: 280px;
                    }

                    .nav-item {
                        width: 85%;
                    }

                    .contact-button .nav-link {
                        margin: 12px 0 0 0;
                        border-radius: 8px;
                        width: 80%;
                    }
                }

                @media (max-width: 480px) {
                    .navbar-container {
                        padding: 14px 16px;
                    }

                    .navbar-header {
                        font-size: 18px;
                    }

                    .navbar-menu {
                        width: 260px;
                    }

                    .nav-item {
                        width: 85%;
                    }

                    .nav-link {
                        padding: 14px 20px;
                        font-size: 15px;
                    }

                    .contact-button .nav-link {
                        margin: 12px 0 0 0;
                        width: 78%;
                    }
                }
            `}</style>
        </>
    );
}
