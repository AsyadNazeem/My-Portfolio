import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import HomeHeader from "./components/HeroHeader";
import profilePic from "./components/images/profileImg.png";
import AboutSection from "./components/About";
import EducationSection from "./components/Education";
import ContactSection from "./components/Contact";
import Footer from "./components/footer";
import ProjectsWrapper from "./components/ProjectSection";
import { DarkModeProvider } from './components/DarkModeContext';


function App() {
    return (
        <DarkModeProvider>
            <div className="App">
                <Navbar/>
                <HomeHeader profileImage={profilePic}/>
                <AboutSection/>
                <EducationSection/>
                <ProjectsWrapper />
                <ContactSection/>
                <Footer/>
            </div>
        </DarkModeProvider>
    );
}

export default App;
