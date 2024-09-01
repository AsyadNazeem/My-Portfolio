import React from "react";
import mySticker from '../images/mySticker.png'
import aboutPhoto from '../images/aboutImage1.png'
import experience from '../images/aboutImage.png'
import edu from '../images/edu.png'
import Resume from '../images/AsyadNazeemResume.pdf'
// import mubarak from '../images/mubarak.jpeg'
import Navbar from "../Navbar";
import Headroom from "react-headroom";
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import {projects} from "../../Data/Data";
import Projects from "../Projects";


const project = projects.map(item => {
    const descriptionLines = item.description.split('\n').map((line, index) => (
        <p key={index} style={{lineHeight: '10px'}}>{line}</p>
    ));
    return (
        <Projects
            key={item.id}
            item={item}
            description={descriptionLines} // Pass the rendered description as a prop
        />
    )

})

// const degreeElements = degree.map(item1 => {
//     return (
//         <Degree
//             key={item1.id}
//             item={item1}
//         />
//     );
// });


function btnclick() {
    window.open(Resume)
}

export default function Home(item) {
    return (
        <body>
        <div>
            <div className='navbar'>
                <Headroom>
                    <Navbar/>
                </Headroom>
            </div>
            <div className='Home'>
                <section name="home">
                    <div className="top">
                        <div>
                            <h1 className='heading'>Full-Stack Web <br/> Developer <br/> 🧑🏻‍💻👋🏻</h1>
                            <h4 className='sub-heading'>Hi, I'm Asyad Nazeem. A passionate Full-Stack Web
                                Developer
                                based
                                <br/> in Colombo, Sri Lanka 📍</h4>
                            <div className='social-links'>
                                <div className="linkedin">
                                    <a href="https://linkedin.com/in/asyad-nazeem" target="_blank"
                                       rel="noopener noreferrer">
                                        <img className="linkedin"
                                             src="https://img.icons8.com/ios-filled/50/linkedin.png"
                                             alt="linkedin"/>
                                    </a>
                                </div>
                                <div className="github">
                                    <a href="https://github.com/AsyadNazeem" target="_blank" rel="noopener noreferrer">
                                        <img className='github' src="https://img.icons8.com/ios-filled/50/github.png"
                                             alt="github"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='images'>
                            <img className='image' src={mySticker} alt="profile"/>
                        </div>
                    </div>


                    <div className="tech-stack">
                        <div className='head'>
                            <h1 className="languages"> Tech Stack </h1>
                            <div className='line'></div>
                        </div>

                        <div className="language-logos">

                            <div className='logo'>
                                <img width="35" height="35" src="https://img.icons8.com/color/48/html-5--v1.png"
                                     alt="html-5--v1"/>
                            </div>
                            <div className='logo'>
                                <img width="35" height="35" src="https://img.icons8.com/color/48/css3.png"
                                     alt="css3"/>
                            </div>
                            <div className='logo'>
                                <img width="35" height="35"
                                     src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                                     alt="javascript--v1"/>
                            </div>
                            <div className='logo'>
                                <img width="65" src="https://www.vectorlogo.zone/logos/php/php-ar21.svg"
                                     alt="php"/>
                            </div>
                            <div className='logo'>
                                <img width="35" height="35" src="https://img.icons8.com/color/48/react-native.png"
                                     alt="react-native"/>
                            </div>
                            <div className='logo'>
                                <img width="35" height="35" src="https://img.icons8.com/color/48/nodejs.png"
                                     alt="nodejs"/>
                            </div>
                            <div className='logo'>
                                <img width="35" height="35"
                                     src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"
                                     alt="mongodb"/>
                            </div>
                            <div className='logo'>
                                <img width="35" height="35" src="https://img.icons8.com/color/48/000000/mongodb.png"
                                     alt="mongodb"/>
                            </div>
                        </div>

                    </div>
                </section>

                <div className='separator' style={{display: 'flex', justifyContent: 'center'}}>
                    <div className = 'line1'></div>
                </div>

                <section name="about">
                    <div className='summary-about'>
                        <div className="summary-about-img">
                            <img src={aboutPhoto} alt="computer photo"/>
                        </div>
                        <div>
                            <div className="summary-about-heading">
                                <h1 className="summary-about-heading">About Me</h1>
                            </div>
                            <div className="summary-about-subheading">
                                <h4 className="summary-about-subheading">A dedicated Full-Stack Web
                                    Developer <br/> based
                                    in
                                    Colombo, Sri
                                    Lanka.</h4>
                            </div>
                            <div className="summary-about-paragraph1">
                                <p className="summary-about-paragraph">I am a passionate and dedicated Full-Stack Web
                                    Developer based in Colombo, Sri Lanka, with a proven track record of developing
                                    modern, scalable, and visually compelling web applications. My expertise spans both
                                    front-end and back-end technologies, enabling me to create seamless, robust, and
                                    interactive solutions that deliver exceptional user experiences.
                                </p>

                                <p className="summary-about-paragraph">
                                    On the front-end, I focus on crafting intuitive and responsive interfaces using
                                    technologies like React, HTML, CSS/Bootstrap, and JavaScript. My goal is to ensure
                                    that every application I build not only looks great but also functions smoothly
                                    across all devices and platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="summary-about-paragraph">On the back-end, I specialize in designing and optimizing
                        server-side components with Node.js, Express, PHP, and MySQL, ensuring that the applications are
                        scalable, secure, and efficient. My experience with database management, including MySQL and
                        MongoDB, allows me to create reliable and high-performance data-driven applications.
                    </p>

                    <p>
                        I am also proficient in version control systems like Git and GitHub, which I use to manage and
                        collaborate on projects effectively. My work is driven by a commitment to best practices in
                        coding,
                        testing, and project management, ensuring that the solutions I develop are of the highest
                        quality.
                    </p>
                    <p>
                        Whether I’m spearheading the development of an Enterprise Resource Planning (ERP) system or
                        collaborating with cross-functional teams to integrate new features, my focus remains on solving
                        real-world problems with innovative and practical solutions. If you're looking for a skilled
                        full-stack developer to bring your ideas to life, I’m eager to collaborate and take on new
                        challenges.
                    </p>
                </section>

                <div className='separator' style={{display: 'flex', justifyContent: 'center'}}>
                    <div className = 'line1'></div>
                </div>

                <section name="education" >
                    <div className="edu">
                        <h1 className="edu-heading">Education</h1>
                        <h2 className='edu-subheading'>Here are a few projects I've worked on recently.</h2>
                        <div className="icbt">
                            <div>
                                <p>I have pursued a comprehensive and rigorous academic journey in the field of software
                                    engineering, beginning with the completion of my Higher Diploma in Software
                                    Engineering
                                    and Computing from ICBT Campus, Colombo, between March 2021 and October 2022. During
                                    this program, I acquired a strong foundation in software development, programming,
                                    and system design. For my final project, I successfully developed a Fuel Management
                                    System, which serves as a centralized solution for managing fuel availability across
                                    multiple fuel stations. This system includes features for registering fuel stations,
                                    checking real-time fuel availability, and streamlining fuel distribution,
                                    demonstrating
                                    my ability to design and implement practical software solutions for complex
                                    challenges.
                                </p>

                                <p>
                                    Building on this foundation, I am currently advancing my expertise by pursuing a BSc
                                    Hons in Software Engineering at ICBT Campus, Colombo, which I started in May 2023
                                    and
                                    am actively engaged in. This program is equipping me with advanced knowledge in
                                    full-stack development, database management, and cutting-edge technologies. As part
                                    of
                                    my current studies, I am working on a Machine Learning project focused on the
                                    agricultural sector, where I am developing predictive models to enhance agricultural
                                    productivity and sustainability. This project allows me to apply machine learning
                                    techniques to real-world problems, further honing my skills in data analysis and
                                    algorithm development.</p>
                            </div>
                            <div className="summary-about-img">
                                <img src={edu} alt="computer photo"/>
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

                <div className='separator' style={{display: 'flex', justifyContent: 'center'}}>
                    <div className = 'line1'></div>
                </div>


                <section name="experience">
                    <div className="edu">
                        <h1 className="edu-heading">Experience</h1>
                        <h2 className='edu-subheading'>Here are a few projects I've worked on recently.</h2>

                        <div className='exp' >
                            <div className="summary-about-img" style={{marginTop:'90px'}}>
                                <img src={experience} alt="computer photo"/>
                            </div>
                            <div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <h4>Associate Software Engineer (PHP) </h4>
                                    <h4>February 2024 - Present</h4>
                                </div>
                                <p>Currently, I work as an Associate Software Engineer (PHP) at Csquare Holdings Pvt
                                    Ltd, where
                                    I lead the design, development, and maintenance of Enterprise Resource Planning
                                    (ERP)
                                    systems,
                                    significantly enhancing operational efficiency. My role involves writing clean,
                                    efficient,
                                    and maintainable code in PHP and other programming languages, ensuring the delivery
                                    of
                                    high-quality software solutions. Additionally, I am responsible for designing and
                                    optimizing
                                    MySQL databases, which has improved data management and access speed. I also
                                    contribute to
                                    the overall software system design and architecture, ensuring that the solutions we
                                    build
                                    are both robust and scalable. My collaborative approach has enabled successful
                                    integration
                                    of new features and resolution of complex issues, leading to streamlined project
                                    execution.
                                </p>

                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <h4>Intern Software Engineer (PHP)</h4>
                                    <h4>August 2023 - January 2024</h4>
                                </div>
                                <p>Before this, I completed a six-month internship as a Full-Stack Software Engineer
                                    (PHP)
                                    at
                                    Csquare Holdings Pvt Ltd. During this period, I applied coding best practices under
                                    the
                                    guidance of senior developers, contributing to the development, testing, and
                                    maintenance
                                    of software applications. My role also involved executing test plans to ensure
                                    software
                                    quality, identifying, and resolving bugs to enhance performance. I gained
                                    substantial
                                    experience in database designing and management, which continues to inform my work
                                    today.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                <div className='separator' style={{display: 'flex', justifyContent: 'center'}}>
                    <div className = 'line1'></div>
                </div>

                <section name="projects">
                    <div className="portfolio">
                        <h1 className='portfolio-heading'>Portfolio</h1>
                        <h2 className='portfolio-subheading'>Here are a few projects I've worked on recently.</h2>
                        <div className="portfolio-projects">
                            {project}
                        </div>
                    </div>
                </section>

                <div className='separator' style={{display: 'flex', justifyContent: 'center'}}>
                    <div className = 'line1'></div>
                </div>

                <section name="contact">
                    <div className="contacts">
                        <h1 className='contacts-heading'>Contact</h1>
                        <h2 className='contacts-subheading'>Want to collaborate on a project or just want to
                            say hi?</h2>
                        <div className="contact-details">
                            <div className="row1">
                                <div className='contact-location'>
                                    <img src="https://img.icons8.com/glyph-neue/64/000000/map-marker.png"
                                         alt="map-marker"/>
                                    <div>
                                        <h1>Location</h1>
                                        <p>Colombo, Sri Lanka</p>
                                    </div>
                                </div>
                                <div className='contact-phone'>
                                    <img src="https://img.icons8.com/ios-filled/50/000000/phone.png"/>
                                    <div>
                                        <h1>Phone</h1>
                                        <p>+94 76 809 4431</p>
                                    </div>
                                </div>
                                <div className='contact-mail'>
                                    <img
                                        src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-mail-coding-kiranshastry-solid-kiranshastry.png"
                                        alt="external-mail-coding-kiranshastry-solid-kiranshastry"/>
                                    <div>
                                        <h1>Email</h1>
                                        <p>asyadnazeem@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-Resume">
                                <h2 className="wording">Interested in My Work? Explore My Resume for a Comprehensive
                                    Look at My Skills and Experience</h2>
                                <button className='resume-btn' onClick={btnclick}>View My Resume</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="footer">
                <div className="copy-write-text">
                    <h1>Copyright © 2024. All rights are reserved</h1>
                </div>
                <div className='footer-ico'>
                    <div className="footer-linkedin">
                        <a href="https://linkedin.com/in/asyad-nazeem" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin"/>
                        </a>
                    </div>
                    <div className="footer-github">
                        <a href="https://github.com/AsyadNazeem" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="github"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </body>
    )
}
