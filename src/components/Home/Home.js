import React, {useEffect, useState} from "react";
import Resume from "../images/AsyadNazeemResume.pdf";
import Navbar from "../Navbar";
import Headroom from "react-headroom";
import {projects} from "../../Data/Data";
import Project from "../Projects";
import AboutSection from "../About";
import EducationSection from "../Education";
import ContactSection from "../Contact";
import HomeHeader from "../HeroHeader";
import Footer from "../footer";
import profilePic from '../images/profileImg.png'; // adjust path to your image


function btnclick() {
    window.open(Resume);
}

export default function Home(item) {

    return (
        <body>
        <div>
            <div className="navbar">
                <Headroom>
                    <Navbar/>
                </Headroom>
            </div>
            <div className="Home">
                {/*<section name="home">*/}
                {/*    <div className="top">*/}
                {/*        <div>*/}
                {/*            <h1 className="heading">*/}
                {/*                👋 Hi, I'm Asyad Nazeem <br/>*/}
                {/*                A Developer Who <br/> Bridges Technology, <br/> Data & Strategy*/}
                {/*            </h1>*/}
                {/*            <h4 className="sub-heading">*/}
                {/*                Full-Stack Web Development | Data Analysis | Business Analysis | Project Management*/}
                {/*            </h4>*/}
                {/*            <div className="social-links">*/}
                {/*                <div className="linkedin">*/}
                {/*                    <a*/}
                {/*                        href="https://linkedin.com/in/asyad-nazeem"*/}
                {/*                        target="_blank"*/}
                {/*                        rel="noopener noreferrer"*/}
                {/*                    >*/}
                {/*                        <img*/}
                {/*                            className="linkedin"*/}
                {/*                            src="https://img.icons8.com/ios-filled/50/linkedin.png"*/}
                {/*                            alt="linkedin"*/}
                {/*                        />*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*                <div className="github">*/}
                {/*                    <a*/}
                {/*                        href="https://github.com/AsyadNazeem"*/}
                {/*                        target="_blank"*/}
                {/*                        rel="noopener noreferrer"*/}
                {/*                    >*/}
                {/*                        <img*/}
                {/*                            className="github"*/}
                {/*                            src="https://img.icons8.com/ios-filled/50/github.png"*/}
                {/*                            alt="github"*/}
                {/*                        />*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="images">*/}
                {/*            <img className="image" src={mySticker} alt="profile"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="tech-stack">*/}
                {/*        <div className="head">*/}
                {/*            <h1 className="languages"> 🧰 Core Tools & Technologies </h1>*/}
                {/*            <div className="line"></div>*/}
                {/*        </div>*/}
                {/*        <div style={{marginTop: "10px"}}>*/}
                {/*            <TechStack/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                <HomeHeader profileImage={profilePic}/>

                {/*<div*/}
                {/*    className="separator"*/}
                {/*    style={{display: "flex", justifyContent: "center"}}*/}
                {/*>*/}
                {/*    <div className="line1"></div>*/}
                {/*</div>*/}

                <section className="about-section" id="about">

                    <AboutSection/>

                </section>


                {/*<div*/}
                {/*    className="separator"*/}
                {/*    style={{display: "flex", justifyContent: "center"}}*/}
                {/*>*/}
                {/*    <div className="line1"></div>*/}
                {/*</div>*/}


                <EducationSection/>


                {/*<section name="education">*/}
                {/*    <div className="edu">*/}
                {/*        <h1 className="edu-heading">Education</h1>*/}
                {/*        <h2 className='edu-subheading'>Here are a few projects I've worked on recently.</h2>*/}
                {/*        <div className="icbt">*/}
                {/*            <Degree educationData={educationData}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/*<div*/}
                {/*    className="separator"*/}
                {/*    style={{display: "flex", justifyContent: "center"}}*/}
                {/*>*/}
                {/*    <div className="line1"></div>*/}
                {/*</div>*/}

                {/*<section className="experience-section" id="experience">*/}
                {/*    <div className="experience-container">*/}
                {/*        <div className="experience-header">*/}
                {/*            <h2 className="experience-title">Experience</h2>*/}
                {/*            <h3 className="experience-subtitle">Professional Experience & Achievements</h3>*/}
                {/*        </div>*/}

                {/*        <div className="experience-content">*/}
                {/*            <div className="experience-item">*/}
                {/*                <div className="experience-item-header">*/}
                {/*                    <h4 className="experience-item-title">Associate Software Engineer (PHP)</h4>*/}
                {/*                    <p className="experience-item-period">February 2024 - Present</p>*/}
                {/*                </div>*/}
                {/*                <p className="experience-company">Csquare Holdings Pvt Ltd</p>*/}

                {/*                <p className="experience-paragraph">*/}
                {/*                    Currently, I work as an Associate Software Engineer (PHP) at Csquare Holdings Pvt*/}
                {/*                    Ltd, where I lead the design, development, and maintenance of Enterprise Resource*/}
                {/*                    Planning (ERP) systems, significantly enhancing operational efficiency. My role*/}
                {/*                    involves writing clean, efficient, and maintainable code in PHP and other*/}
                {/*                    programming languages, ensuring the delivery of high-quality software solutions.*/}
                {/*                </p>*/}

                {/*                <ul className="experience-details-list">*/}
                {/*                    <li>Lead design and development of ERP systems</li>*/}
                {/*                    <li>Write clean, efficient, and maintainable code in PHP</li>*/}
                {/*                    <li>Optimize MySQL databases to improve data management</li>*/}
                {/*                    <li>Contribute to overall system design and architecture</li>*/}
                {/*                    <li>Integrate new features and resolve complex issues</li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}

                {/*            <div className="experience-item">*/}
                {/*                <div className="experience-item-header">*/}
                {/*                    <h4 className="experience-item-title">Intern Software Engineer (PHP)</h4>*/}
                {/*                    <p className="experience-item-period">August 2023 - January 2024</p>*/}
                {/*                </div>*/}
                {/*                <p className="experience-company">Csquare Holdings Pvt Ltd</p>*/}

                {/*                <p className="experience-paragraph">*/}
                {/*                    Before this, I completed a six-month internship as a Full-Stack Software Engineer*/}
                {/*                    (PHP) at Csquare Holdings Pvt Ltd. During this period, I applied coding best*/}
                {/*                    practices under the guidance of senior developers, contributing to the development,*/}
                {/*                    testing, and maintenance of software applications.*/}
                {/*                </p>*/}

                {/*                <ul className="experience-details-list">*/}
                {/*                    <li>Contributed to development, testing, and maintenance of applications</li>*/}
                {/*                    <li>Executed test plans to ensure software quality</li>*/}
                {/*                    <li>Identified and resolved bugs to enhance performance</li>*/}
                {/*                    <li>Gained experience in database design and management</li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/*<div*/}
                {/*    className="separator"*/}
                {/*    style={{display: "flex", justifyContent: "center"}}*/}
                {/*>*/}
                {/*    <div className="line1"></div>*/}
                {/*</div>*/}


                <section className="projects-section" id="projects">
                    <div className="projects-container">
                        {/* Header - ONLY ONCE */}
                        <div className="projects-header">
                            <div className="projects-badge">
                                <span>Portfolio</span>
                            </div>
                            <h2 className="projects-title">Featured Projects</h2>
                            <p className="projects-subtitle">
                                Here are a few projects I've worked on recently
                            </p>
                        </div>

                        {/* Project Cards */}
                        <div className="projects-content">
                            {projects.map((project, index) => (
                                <Project key={project.id} item={project} index={index}/>
                            ))}
                        </div>
                    </div>
                </section>

                {/*<div*/}
                {/*    className="separator"*/}
                {/*    style={{display: "flex", justifyContent: "center"}}*/}
                {/*>*/}
                {/*    <div className="line1"></div>*/}
                {/*</div>*/}

                <ContactSection/>
            </div>
            <Footer/>
        </div>
        </body>
    );
}
