import React from "react";

export default function Navbar() {
    return (
        <div>
            <ul className="Navbar">
                <div>
                    <h1 className="navbar-header">dev.Navbar</h1>
                </div>
                <div activeClassName ="active" className="nav-links">
                    <li className="Navbar-link">Home</li>
                    <li className="Navbar-link">About</li>
                    <li className="Navbar-link">Projects</li>
                    <li className="Navbar-link">Contact</li>
                </div>
            </ul>
        </div>
    )
}