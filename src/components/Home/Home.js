import React, {useState, useEffect} from "react";
import mySticker from "../images/profileImg.png";
import Resume from "../images/AsyadNazeemResume.pdf";
import Navbar from "../Navbar";
import Headroom from "react-headroom";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import {projects} from "../../Data/Data";
import Project from "../Projects";
import TechStack from "./TechStack";



// const project = projects.map((item) => {
//     const descriptionLines = item.description.split("\n").map((line, index) => (
//         <p key={index} style={{lineHeight: "10px"}}>
//             {line}
//         </p>
//     ));
//     return (
//         <Projects
//             key={item.id}
//             item={item}
//             description={descriptionLines} // Pass the rendered description as a prop
//         />
//     );
// });


// const degreeElements = degree.map(item1 => {
//     return (
//         <Degree
//             key={item1.id}
//             item={item1}
//         />
//     );
// });

function btnclick() {
    window.open(Resume);
}

export default function Home(item) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobileView = window.innerWidth <= 700;
            console.log("Is Mobile View:", isMobileView);
            setIsMobile(isMobileView);
        };

        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <body>
        <div>
            <div className="navbar">
                <Headroom>
                    <Navbar/>
                </Headroom>
            </div>
            <div className="Home">
                <section name="home">
                    <div className="top">
                        <div>
                            <h1 className="heading">
                                Full-Stack Web <br/> Developer <br/> 🧑🏻‍💻👋🏻
                            </h1>
                            <h4 className="sub-heading">
                                Hi, I'm Asyad Nazeem. A passionate Full-Stack Web Developer
                                based
                                <br/> in Colombo, Sri Lanka 📍
                            </h4>
                            <div className="social-links">
                                <div className="linkedin">
                                    <a
                                        href="https://linkedin.com/in/asyad-nazeem"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="linkedin"
                                            src="https://img.icons8.com/ios-filled/50/linkedin.png"
                                            alt="linkedin"
                                        />
                                    </a>
                                </div>
                                <div className="github">
                                    <a
                                        href="https://github.com/AsyadNazeem"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="github"
                                            src="https://img.icons8.com/ios-filled/50/github.png"
                                            alt="github"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="images">
                            <img className="image" src={mySticker} alt="profile"/>
                        </div>
                    </div>

                    <div className="tech-stack">
                        <div className="head">
                            <h1 className="languages"> Tech Stack </h1>
                            <div className="line"></div>
                        </div>
                        <TechStack/>
                    </div>
                </section>

                <div
                    className="separator"
                    style={{display: "flex", justifyContent: "center"}}
                >
                    <div className="line1"></div>
                </div>

                <section className="about-section" id="about">
                    <div className="about-container">
                        <div className="about-header">
                            <h2 className="about-title">About Me</h2>
                            <h3 className="about-subtitle">
                                A dedicated Full-Stack Web Developer based in Colombo, Sri Lanka.
                            </h3>
                        </div>

                        <div className="about-content">
                            <p className="about-paragraph">
                                I am a passionate and dedicated Full-Stack Web Developer with a proven track record of
                                developing modern, scalable, and visually compelling web applications. My expertise
                                spans both front-end and back-end technologies, enabling me to create seamless, robust,
                                and interactive solutions that deliver exceptional user experiences.
                            </p>

                            <div className="skills-container">
                                <ul className="skills-list">
                                    <li>Designing server-side components with Node.js, Express, PHP, and MySQL</li>
                                    <li>Front-end development with React, HTML, CSS/Bootstrap, and JavaScript</li>
                                    <li>Database management using MySQL and MongoDB</li>
                                    <li>Version control with Git and GitHub</li>
                                    <li>Creating intuitive and responsive interfaces</li>
                                    <li>Best practices in coding, testing, and project management</li>
                                </ul>
                            </div>

                            <div className="additional-info">
                                <p className="about-paragraph">
                                    On the back-end, I specialize in designing and optimizing server-side components
                                    with Node.js, Express, PHP, and MySQL, ensuring that the applications are scalable,
                                    secure, and efficient. My experience with database management, including MySQL and
                                    MongoDB, allows me to create reliable and high-performance data-driven applications.
                                </p>

                                <p className="about-paragraph">
                                    I am also proficient in version control systems like Git and GitHub, which I use to
                                    manage and collaborate on projects effectively. My work is driven by a commitment to
                                    best practices in coding, testing, and project management, ensuring that the
                                    solutions I develop are of the highest quality.
                                </p>

                                <p className="about-paragraph">
                                    Whether I'm spearheading the development of an Enterprise Resource Planning (ERP)
                                    system or collaborating with cross-functional teams to integrate new features, my
                                    focus remains on solving real-world problems with innovative and practical
                                    solutions. If you're looking for a skilled full-stack developer to bring your ideas
                                    to life, I'm eager to collaborate and take on new challenges.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div
                    className="separator"
                    style={{display: "flex", justifyContent: "center"}}
                >
                    <div className="line1"></div>
                </div>

                <section className="education-section" id="education">
                    <div className="education-container">
                        <div className="education-header">
                            <h2 className="education-title">Education</h2>
                            <h3 className="education-subtitle">Academic Journey & Milestones</h3>
                        </div>

                        <div className="education-content">
                            <div className="education-item">
                                <h4 className="education-item-heading">BSc Hons in Software Engineering</h4>
                                <p className="education-item-period">May 2023 - Present | ICBT Campus, Colombo</p>

                                <p className="education-paragraph">
                                    Building on this foundation, I am currently advancing my expertise by pursuing a BSc
                                    Hons in Software Engineering at ICBT Campus, Colombo, which I started in May 2023
                                    and am actively engaged in.
                                </p>

                                <ul className="education-details-list">
                                    <li>Currently pursuing a BSc Hons in Software Engineering at ICBT Campus, Colombo.
                                    </li>
                                    <li>Current Project: Working on a Machine Learning project focused on developing
                                        predictive models for agricultural productivity and sustainability.
                                    </li>
                                </ul>
                            </div>

                            <div className="education-item">
                                <h4 className="education-item-heading">Higher Diploma in Software Engineering and
                                    Computing</h4>
                                <p className="education-item-period">March 2021 - October 2022 | ICBT Campus,
                                    Colombo</p>

                                <p className="education-paragraph">
                                    I have pursued a comprehensive and rigorous academic journey in the field of
                                    software engineering, beginning with the completion of my Higher Diploma in Software
                                    Engineering and Computing from ICBT Campus, Colombo. During this program, I acquired
                                    a strong foundation in software development, programming, and system design.
                                </p>

                                <ul className="education-details-list">
                                    <li>Completed a Higher Diploma in Software Engineering and Computing from ICBT
                                        Campus, Colombo.
                                    </li>
                                    <li>Final Project: Developed a Fuel Management System with features like real-time
                                        fuel availability, station registration, and fuel distribution management.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/*<section name="education">*/}
                {/*    <div className="edu">*/}
                {/*        <h1 className="edu-heading">Education</h1>*/}
                {/*        <h2 className='edu-subheading'>Here are a few projects I've worked on recently.</h2>*/}
                {/*        <div className="icbt">*/}
                {/*            <Degree educationData={educationData}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                <div
                    className="separator"
                    style={{display: "flex", justifyContent: "center"}}
                >
                    <div className="line1"></div>
                </div>

                <section className="experience-section" id="experience">
                    <div className="experience-container">
                        <div className="experience-header">
                            <h2 className="experience-title">Experience</h2>
                            <h3 className="experience-subtitle">Professional Experience & Achievements</h3>
                        </div>

                        <div className="experience-content">
                            <div className="experience-item">
                                <div className="experience-item-header">
                                    <h4 className="experience-item-title">Associate Software Engineer (PHP)</h4>
                                    <p className="experience-item-period">February 2024 - Present</p>
                                </div>
                                <p className="experience-company">Csquare Holdings Pvt Ltd</p>

                                <p className="experience-paragraph">
                                    Currently, I work as an Associate Software Engineer (PHP) at Csquare Holdings Pvt
                                    Ltd, where I lead the design, development, and maintenance of Enterprise Resource
                                    Planning (ERP) systems, significantly enhancing operational efficiency. My role
                                    involves writing clean, efficient, and maintainable code in PHP and other
                                    programming languages, ensuring the delivery of high-quality software solutions.
                                </p>

                                <ul className="experience-details-list">
                                    <li>Lead design and development of ERP systems</li>
                                    <li>Write clean, efficient, and maintainable code in PHP</li>
                                    <li>Optimize MySQL databases to improve data management</li>
                                    <li>Contribute to overall system design and architecture</li>
                                    <li>Integrate new features and resolve complex issues</li>
                                </ul>
                            </div>

                            <div className="experience-item">
                                <div className="experience-item-header">
                                    <h4 className="experience-item-title">Intern Software Engineer (PHP)</h4>
                                    <p className="experience-item-period">August 2023 - January 2024</p>
                                </div>
                                <p className="experience-company">Csquare Holdings Pvt Ltd</p>

                                <p className="experience-paragraph">
                                    Before this, I completed a six-month internship as a Full-Stack Software Engineer
                                    (PHP) at Csquare Holdings Pvt Ltd. During this period, I applied coding best
                                    practices under the guidance of senior developers, contributing to the development,
                                    testing, and maintenance of software applications.
                                </p>

                                <ul className="experience-details-list">
                                    <li>Contributed to development, testing, and maintenance of applications</li>
                                    <li>Executed test plans to ensure software quality</li>
                                    <li>Identified and resolved bugs to enhance performance</li>
                                    <li>Gained experience in database design and management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div
                    className="separator"
                    style={{display: "flex", justifyContent: "center"}}
                >
                    <div className="line1"></div>
                </div>

                <section className="projects-section" id="projects">
                    <div className="projects-container">
                        <div className="projects-header">
                            <h2 className="projects-title">Portfolio</h2>
                            <h3 className="projects-subtitle">Here are a few projects I've worked on recently.</h3>
                        </div>

                        <div className="projects-content">
                            {projects.map((project, index) => (
                                <Project key={project.id} item={project} index={index}/>
                            ))}
                        </div>
                    </div>
                </section>

                <div
                    className="separator"
                    style={{display: "flex", justifyContent: "center"}}
                >
                    <div className="line1"></div>
                </div>

                <section className="contact-section" id="contact">
                    <div className="contact-container">
                        <div className="contact-header">
                            <h2 className="contact-title">Contact</h2>
                            <h3 className="contact-subtitle">Want to collaborate on a project or just want to say
                                hi?</h3>
                        </div>

                        <div className="contact-content">
                            <div className="contact-info-cards">
                                <div className="contact-card">
                                    <div className="contact-card-icon">
                                        <img src="https://img.icons8.com/glyph-neue/64/3498db/map-marker.png"
                                             alt="Location icon"/>
                                    </div>
                                    <h4 className="contact-card-title">Location</h4>
                                    <p className="contact-card-value">Colombo, Sri Lanka</p>
                                </div>

                                <div className="contact-card">
                                    <div className="contact-card-icon">
                                        <img src="https://img.icons8.com/ios-filled/50/3498db/phone.png"
                                             alt="Phone icon"/>
                                    </div>
                                    <h4 className="contact-card-title">Phone</h4>
                                    <p className="contact-card-value">+94 76 809 4431</p>
                                </div>

                                <div className="contact-card">
                                    <div className="contact-card-icon">
                                        <img
                                            src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/3498db/external-mail-coding-kiranshastry-solid-kiranshastry.png"
                                            alt="Email icon"
                                        />
                                    </div>
                                    <h4 className="contact-card-title">Email</h4>
                                    <p className="contact-card-value">asyadnazeem@gmail.com</p>
                                </div>
                            </div>

                            <div className="resume-section">
                                <h3 className="resume-title">
                                    Interested in My Work? Explore My Resume for a Comprehensive Look at My Skills and
                                    Experience
                                </h3>
                                <button className="resume-button" onClick={btnclick}>
                                    View My Resume
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="footer">
                <div className="copy-write-text">
                    <h1>Copyright © 2024. All rights are reserved</h1>
                </div>
                <div className="footer-ico">
                    <div className="footer-linkedin">
                        <a
                            href="https://linkedin.com/in/asyad-nazeem"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedin} alt="linkedin"/>
                        </a>
                    </div>
                    <div className="footer-github">
                        <a
                            href="https://github.com/AsyadNazeem"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={github} alt="github"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
}
