import React from "react";
import profile from '../images/profile.png'
import aboutPhoto from '../images/about.jpeg'
import mubarak from '../images/mubarak.jpeg'


export default function Home() {
    return (
        <div className='Home'>
            <div className="top">
                <div>
                    <h1 className='heading'>Full Stack React <br/> Developer 👋🏻</h1>
                    <h4 className='sub-heading'>Hi, I'm Asyad Nazeem. A passionate Full Stack React Developer based
                        <br/> in Colombo, Sri Lanka 📍</h4>
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
            <div className='summary-about'>
                <div className="summary-about-img">
                    <img src={aboutPhoto} alt="computer photo"/>
                </div>
                <div>
                    <div className="summary-about-heading">
                        <h1 className="summary-about-heading">About Me</h1>
                    </div>
                    <div className="summary-about-subheading">
                        <h4 className="summary-about-subheading">A dedicated Full Stack React Developer <br/> based in
                            Colombo, Sri
                            Lanka.</h4>
                    </div>
                    <div className="summary-about-paragraph">
                        <p className="summary-about-paragraph">II'm a full-stack React developer based in Colombo, Sri
                            Lanka. With expertise in HTML, <br/> CSS, JavaScript, React.js, Node.js, and MongoDB, I
                            specialize
                            in building modern and <br/> scalable web applications.
                            Passionate about front-end development, I create visually <br/> appealing websites using
                            HTML and
                            CSS. I bring interactivity and dynamic functionality <br/> to applications using JavaScript,
                            with a focus on React.js for building robust front-end <br/> solutions. <br/> If you're
                            looking for a
                            skilled full-stack React developer to bring your ideas to life, <br/> I'm ready to
                            collaborate and
                            take on new challenges.</p>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                <h1 className='portfolio-heading'>Portfolio</h1>
                <h2 className='portfolio-subheading'>Here are a few projects I've worked on recently.</h2>
                <div className="portfolio-projects">
                    <div className="project1">
                        <div className="project1-img">
                            <img src={mubarak} alt="mubarak web"/>
                        </div>
                        <div className="project1-details">
                            <h1 className="project1-heading">Mubarak Enterprises</h1>
                            <p className="project1-paragraph">A website for a local business, Mubarak Enterprises. <br/>
                                Built using React.js, Node.js, Express.js, MongoDB, and Bootstrap.
                            </p>
                            <div className="used-languages">
                                <div className="lang">
                                    <h1>React Js</h1>
                                </div>
                                <div className="lang">
                                    <h1>Node Js</h1>
                                </div>
                                <div className="lang">
                                    <h1>Express Js</h1>
                                </div>
                                <div className="lang">
                                    <h1>MongoDB</h1>
                                </div>
                            </div>
                            <div className="links">
                                <div className="mubarak-github">
                                    <div className="mubarak-code">
                                        <h1>Code</h1>
                                    </div>
                                    <div>
                                        <img className='mubarak-img'
                                             src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
                                    </div>
                                </div>
                                <div className="mubarak-website">
                                    <div className="mubarak-code">
                                        <h1>Live Demo</h1>
                                    </div>
                                    <div>
                                        <img className='mubarak-img'
                                             src="https://img.icons8.com/ios-filled/50/domain.png" alt="website"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}