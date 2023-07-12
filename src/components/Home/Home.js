import React from "react";
import profile from '../images/profile.png'

export default function Home() {
    return (
        <div className='Home'>
            <div className="top">
                <div>
                    <h1 className='heading'>Full Stack React <br/> Developer 👋🏻</h1>
                    <h4 className='sub-heading'>Hi, I'm Asyad Nazeem. A passionate Full Stack React Developer based
                        <br/>  in Colombo, Sri Lanka 📍</h4>
                    <div className='social-links'>
                        <div className="linkedin">
                            <img className="linkedin" src="https://img.icons8.com/ios-filled/50/linkedin.png"
                                 alt="linkedin"/>
                        </div>
                        <div className="github">
                            <img className='github' src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
                        </div>
                    </div>
                </div>
                <div className='images'>
                    <img className='image' src={profile} alt="profile"/>
                </div>
            </div>
            <div className="tech-stack">
                <h1 className="languages"> Tech Stack <span> | </span></h1>
                <div className="language-logos">
                    <div className='logo'>
                        <img width="35" height="35" src="https://img.icons8.com/color/48/html-5--v1.png"
                             alt="html-5--v1"/>
                    </div>
                    <div className='logo'>
                        <img width="35" height="35" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                    </div>
                    <div className='logo'>
                        <img width="35" height="35" src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                             alt="javascript--v1"/>
                    </div>
                    <div className='logo'>
                        <img width="35" height="35" src="https://img.icons8.com/color/48/react-native.png"
                             alt="react-native"/>
                    </div>
                    <div className='logo'>
                        <img width="35" height="35" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs"/>
                    </div>
                    <div className='logo'>
                        <img width="35" height="35" src="https://img.icons8.com/color/48/000000/mongodb.png"
                             alt="mongodb"/>
                    </div>
                </div>
            </div>
        </div>
    )
}