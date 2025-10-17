import React from 'react';
import {ArrowDown, Github, Linkedin, Sparkles} from 'lucide-react';
import {useDarkMode} from './DarkModeContext';

export default function HomeHeader({profileImage}) {

    const {isDarkMode} = useDarkMode();


    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <>
            <section className="hero-section" id="home">
                <div className="hero-container">
                    {/* Hero Content */}
                    <div className="hero-content">
                        <div className="hero-badge">
                            <Sparkles className="badge-icon"/>
                            <span>Welcome to my Portfolio</span>
                        </div>

                        <h1 className="hero-title">
                            <span className="wave">👋</span> Hi, I'm Asyad Nazeem
                        </h1>

                        <h2 className="hero-subtitle">
                            A Developer Who Bridges
                            <span className="gradient-text"> Technology, Data & Strategy</span>
                        </h2>

                        <p className="hero-description">
                            Specializing in Full-Stack Web Development, Data Analysis, Business Analysis, and Project
                            Management
                        </p>

                        <div className="hero-actions">
                            <div className="social-links">
                                <a
                                    href="https://linkedin.com/in/asyad-nazeem"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link linkedin-link"
                                    aria-label="LinkedIn Profile"

                                >
                                    <Linkedin className="social-icon"/>
                                    <span>LinkedIn</span>
                                </a>

                                <a
                                    href="https://github.com/AsyadNazeem"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link github-link"
                                    aria-label="GitHub Profile"
                                >
                                    <Github className="social-icon"/>
                                    <span>GitHub</span>
                                </a>
                            </div>

                            <button className="scroll-button" onClick={scrollToAbout}>
                                <span>Explore More</span>
                                <ArrowDown className="scroll-icon"/>
                            </button>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="hero-image-container">
                        <div className="image-decoration-circle"></div>
                        <div className="image-wrapper">
                            <img src={profileImage} alt="Asyad Nazeem" className="profile-image"/>
                        </div>
                        <div className="floating-badge badge-1">
                            <span>💻</span>
                            <p>Full-Stack Dev</p>
                        </div>
                        <div className="floating-badge badge-2">
                            <span>📊</span>
                            <p>Data Analysis</p>
                        </div>
                        <div className="floating-badge badge-3">
                            <span>📈</span>
                            <p>Business Analysis</p>
                        </div>
                        <div className="floating-badge badge-4">
                            <span>🎯</span>
                            <p>Project Mgmt</p>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .hero-section {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%);
                    padding: 200px 20px 80px;
                    position: relative;
                    overflow: hidden;
                    background: ${isDarkMode
                            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
                            : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%)'
                    };
                }

                .hero-section::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -20%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 20s ease-in-out infinite;
                }

                .hero-section::after {
                    content: '';
                    position: absolute;
                    bottom: -30%;
                    left: -10%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 15s ease-in-out infinite reverse;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0) rotate(0deg);
                    }
                    50% {
                        transform: translate(30px, 30px) rotate(5deg);
                    }
                }

                .hero-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                    position: relative;
                    z-index: 1;
                }

                /* Hero Content */
                .hero-content {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    width: fit-content;
                    padding: 10px 20px;
                    background: ${isDarkMode ? 'rgba(30, 41, 59, 0.8)' : 'white'};
                    border-radius: 30px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #3498db;
                    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.2);
                    animation: slideInLeft 0.6s ease-out;
                }

                .badge-icon {
                    width: 16px;
                    height: 16px;
                }

                .hero-title {
                    font-size: 56px;
                    font-weight: 800;
                    color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
                    line-height: 1.2;
                    margin: 0;
                    animation: slideInLeft 0.6s ease-out 0.2s both;
                    
                }

                .wave {
                    display: inline-block;
                    animation: wave 2s ease-in-out infinite;
                }

                @keyframes wave {
                    0%, 100% {
                        transform: rotate(0deg);
                    }
                    10%, 30% {
                        transform: rotate(14deg);
                    }
                    20% {
                        transform: rotate(-8deg);
                    }
                    40% {
                        transform: rotate(-4deg);
                    }
                    50% {
                        transform: rotate(10deg);
                    }
                }

                .hero-subtitle {
                    font-size: 42px;
                    font-weight: 700;
                    color: ${isDarkMode ? '#e2e8f0' : '#2c3e50'};
                    line-height: 1.3;
                    margin: 0;
                    animation: slideInLeft 0.6s ease-out 0.4s both;
                }

                .gradient-text {
                    background: linear-gradient(135deg, #3498db 0%, #8b5cf6 50%, #ec4899 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    display: inline-block;
                }

                .hero-description {
                    font-size: 18px;
                    color: ${isDarkMode ? '#cbd5e1' : '#666'};
                    line-height: 1.7;
                    max-width: 500px;
                    margin: 0;
                    animation: slideInLeft 0.6s ease-out 0.6s both;
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                /* Hero Actions */
                .hero-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-top: 16px;
                    animation: slideInLeft 0.6s ease-out 0.8s both;
                }

                .social-links {
                    display: flex;
                    gap: 16px;
                }

                .social-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 28px;
                    border-radius: 12px;
                    font-size: 15px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .social-link::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    transition: left 0.5s ease;
                }

                .social-link:hover::before {
                    left: 100%;
                }

                .linkedin-link {
                    background: #0077b5;
                    color: white;
                }

                .linkedin-link:hover {
                    background: #005885;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0, 119, 181, 0.3);
                }

                .github-link {
                    background: #1a1a1a;
                    color: white;
                }

                .github-link:hover {
                    background: #000000;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
                }

                .social-icon {
                    width: 20px;
                    height: 20px;
                }

                .scroll-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 24px;
                    background: white;
                    color: #3498db;
                    border: 2px solid #3498db;
                    border-radius: 12px;
                    font-size: 15px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    width: fit-content;
                }

                .scroll-button:hover {
                    background: #3498db;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(52, 152, 219, 0.3);
                }

                .scroll-icon {
                    width: 18px;
                    height: 18px;
                    animation: bounce 2s ease-in-out infinite;
                }

                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(4px);
                    }
                }

                /* Hero Image */
                .hero-image-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeIn 0.8s ease-out 0.4s both;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .image-decoration-circle {
                    position: absolute;
                    width: 500px;
                    height: 500px;
                    background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3498db 100%);
                    border-radius: 50%;
                    opacity: 0.15;
                    animation: pulse 4s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.15;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 0.2;
                    }
                }

                .image-wrapper {
                    position: relative;
                    width: 390px;
                    height: 400px;
                    border-radius: 50%;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
                    border: 8px solid white;
                    z-index: 2;
                    background-color: white;
                }

                .profile-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                /* Floating Badges */
                .floating-badge {
                    position: absolute;
                    background: ${isDarkMode ? 'rgba(30, 41, 59, 0.9)' : 'white'};
                    padding: 12px 16px;
                    border-radius: 12px;
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    animation: floatBadge 3s ease-in-out infinite;
                    z-index: 3;
                }

                .floating-badge span {
                    font-size: 24px;
                }

                .floating-badge p {
                    margin: 0;
                    font-size: 13px;
                    font-weight: 600;
                    color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
                    white-space: nowrap;
                }

                .badge-1 {
                    top: 10%;
                    right: -10%;
                    animation-delay: 0s;
                }

                .badge-2 {
                    top: 40%;
                    right: -15%;
                    animation-delay: 0.5s;
                }

                .badge-3 {
                    bottom: 30%;
                    left: -10%;
                    animation-delay: 1s;
                }

                .badge-4 {
                    bottom: 10%;
                    right: 0%;
                    animation-delay: 1.5s;
                }

                @keyframes floatBadge {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                /* Scroll Indicator */
                .scroll-indicator {
                    position: absolute;
                    bottom: 40px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 2;
                }

                .mouse {
                    width: 26px;
                    height: 40px;
                    border: 2px solid #3498db;
                    border-radius: 13px;
                    position: relative;
                    animation: mouseFloat 2s ease-in-out infinite;
                }

                @keyframes mouseFloat {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(8px);
                    }
                }

                .wheel {
                    width: 4px;
                    height: 8px;
                    background: #3498db;
                    border-radius: 2px;
                    position: absolute;
                    top: 8px;
                    left: 50%;
                    transform: translateX(-50%);
                    animation: wheelScroll 2s ease-in-out infinite;
                }

                @keyframes wheelScroll {
                    0% {
                        opacity: 1;
                        top: 8px;
                    }
                    100% {
                        opacity: 0;
                        top: 22px;
                    }
                }

                /* Responsive Design */
                @media (max-width: 968px) {
                    .hero-section {
                        padding: 100px 20px 60px;
                    }

                    .hero-container {
                        grid-template-columns: 1fr;
                        gap: 60px;
                        text-align: center;
                    }

                    .hero-content {
                        align-items: center;
                    }

                    .hero-badge {
                        margin: 0 auto;
                    }

                    .hero-title {
                        font-size: 42px;
                    }

                    .hero-subtitle {
                        font-size: 32px;
                    }

                    .hero-description {
                        max-width: 100%;
                    }

                    .hero-actions {
                        align-items: center;
                        width: 100%;
                    }

                    .social-links {
                        justify-content: center;
                    }

                    .image-wrapper {
                        width: 320px;
                        height: 320px;
                    }

                    .image-decoration-circle {
                        width: 400px;
                        height: 400px;
                    }

                    .floating-badge {
                        display: none;
                    }
                }

                @media (max-width: 640px) {
                    .hero-section {
                        padding: 120px 16px 50px;
                    }

                    .hero-title {
                        font-size: 36px;
                    }

                    .hero-subtitle {
                        font-size: 26px;
                    }

                    .hero-description {
                        font-size: 16px;
                    }

                    .social-links {
                        flex-direction: column;
                        width: 85%;
                    }

                    .social-link {
                        width: 80%;
                        justify-content: center;
                    }

                    .github-link {
                        width: 79%;
                    }

                    .image-wrapper {
                        width: 280px;
                        height: 280px;
                    }

                    .image-decoration-circle {
                        width: 350px;
                        height: 350px;
                    }

                    .scroll-indicator {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}
