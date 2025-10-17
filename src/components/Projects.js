import React, { useState } from 'react';
import { Code2, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useDarkMode } from './DarkModeContext';

export default function Project({ item, index }) {
    const { isDarkMode } = useDarkMode();
    const isEven = index % 2 === 0;

    // Handle multiple images
    const images = item.images || [item.img];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e) => {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className={`project-card ${!isEven ? 'reversed' : ''}`}>
                {/* Project Image */}
                <div className="project-image-container">
                    <div className="project-image-wrapper">
                        <img
                            src={images[currentImageIndex]}
                            alt={`${item.title} - Image ${currentImageIndex + 1}`}
                            className="project-image"
                        />
                        <div className="project-image-overlay">
                            <div className="overlay-content">
                                <Code2 className="overlay-icon" />
                                <p className="overlay-text">View Project</p>
                            </div>
                        </div>

                        {/* Navigation Arrows - Only show if multiple images */}
                        {images.length > 1 && (
                            <div className="image-navigation">
                                <button
                                    className="nav-arrow nav-arrow-left"
                                    onClick={prevImage}
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft />
                                </button>
                                <button
                                    className="nav-arrow nav-arrow-right"
                                    onClick={nextImage}
                                    aria-label="Next image"
                                >
                                    <ChevronRight />
                                </button>
                            </div>
                        )}

                        {/* Image Counter */}
                        {images.length > 1 && (
                            <div className="image-counter">
                                {currentImageIndex + 1} / {images.length}
                            </div>
                        )}
                    </div>
                    <div className="image-decoration"></div>
                </div>

                {/* Project Details */}
                <div className="project-content">
                    <div className="project-header">
                        <div className="project-number">0{index + 1}</div>
                        <h3 className="project-title">{item.title}</h3>
                    </div>

                    <div className="project-description-card">
                        <p className="project-description">{item.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="project-tech-section">
                        <div className="tech-label">
                            <span className="tech-label-text">Built with</span>
                        </div>
                        <div className="project-tech-stack">
                            {Object.values(item.languages)
                                .filter(lang => lang)
                                .map((lang, i) => (
                                    <span key={i} className="tech-tag">
                                        {lang}
                                    </span>
                                ))}
                        </div>
                    </div>

                    {/* Project Links */}
                    <div className="project-links">
                        <a
                            href={item.links1.url}
                            className="project-link github-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github className="link-icon" />
                            <span>{item.links1.code || 'View Code'}</span>
                            <ExternalLink className="external-icon" />
                        </a>

                        {item.links2?.url && (
                            <a
                                href={item.links2.url}
                                className="project-link demo-link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExternalLink className="link-icon" />
                                <span>{item.links2.demo || 'Live Demo'}</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .project-card {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                    margin-bottom: 80px;
                    position: relative;
                }

                .project-card.reversed {
                    direction: rtl;
                }

                .project-card.reversed > * {
                    direction: ltr;
                }

                /* Project Image */
                .project-image-container {
                    position: relative;
                    height: 100%;
                    display: flex;
                    align-items: center;
                }

                .project-image-wrapper {
                    position: relative;
                    width: 100%;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: ${isDarkMode
                ? '0 10px 40px rgba(0, 0, 0, 0.5)'
                : '0 10px 40px rgba(0, 0, 0, 0.15)'};
                    transition: all 0.4s ease;
                    z-index: 2;
                    border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
                }

                .project-card:hover .project-image-wrapper {
                    transform: translateY(-8px);
                    box-shadow: ${isDarkMode
                ? '0 20px 60px rgba(0, 0, 0, 0.7)'
                : '0 20px 60px rgba(0, 0, 0, 0.25)'};
                }

                .project-image {
                    width: 100%;
                    height: auto;
                    display: block;
                    transition: transform 0.4s ease;
                }

                .project-card:hover .project-image {
                    transform: scale(1.05);
                }

                .project-image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(52, 152, 219, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    z-index: 2;
                }

                .project-card:hover .project-image-overlay {
                    opacity: 1;
                }

                .overlay-content {
                    text-align: center;
                    color: white;
                }

                .overlay-icon {
                    width: 48px;
                    height: 48px;
                    margin-bottom: 8px;
                }

                .overlay-text {
                    font-size: 16px;
                    font-weight: 600;
                    margin: 0;
                }

                /* Image Navigation Arrows */
                .image-navigation {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    display: flex;
                    gap: 8px;
                    z-index: 3;
                }

                .nav-arrow {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: ${isDarkMode
                ? 'rgba(15, 23, 42, 0.8)'
                : 'rgba(255, 255, 255, 0.9)'};
                    border: 1px solid ${isDarkMode
                ? 'rgba(255, 255, 255, 0.2)'
                : 'rgba(0, 0, 0, 0.1)'};
                    backdrop-filter: blur(10px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
                }

                .nav-arrow:hover {
                    background: linear-gradient(135deg, #3498db 0%, #8b5cf6 100%);
                    color: white;
                    transform: scale(1.1);
                    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);
                    border-color: transparent;
                }

                .nav-arrow:active {
                    transform: scale(0.95);
                }

                .nav-arrow svg {
                    width: 20px;
                    height: 20px;
                }

                /* Image Counter */
                .image-counter {
                    position: absolute;
                    bottom: 16px;
                    right: 16px;
                    padding: 8px 16px;
                    background: ${isDarkMode
                ? 'rgba(15, 23, 42, 0.8)'
                : 'rgba(255, 255, 255, 0.9)'};
                    border: 1px solid ${isDarkMode
                ? 'rgba(255, 255, 255, 0.2)'
                : 'rgba(0, 0, 0, 0.1)'};
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 600;
                    color: ${isDarkMode ? '#cbd5e1' : '#555'};
                    z-index: 3;
                }

                .image-decoration {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border: 2px solid ${isDarkMode ? 'rgba(52, 152, 219, 0.5)' : '#3498db'};
                    border-radius: 16px;
                    top: 20px;
                    left: 20px;
                    z-index: 1;
                    transition: all 0.4s ease;
                }

                .project-card.reversed .image-decoration {
                    left: -20px;
                }

                .project-card:hover .image-decoration {
                    top: 30px;
                    left: 30px;
                }

                .project-card.reversed:hover .image-decoration {
                    left: -30px;
                }

                /* Project Content */
                .project-content {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .project-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .project-number {
                    font-size: 48px;
                    font-weight: 700;
                    background: linear-gradient(135deg, #3498db 0%, #8b5cf6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    line-height: 1;
                    opacity: 0.8;
                }

                .project-title {
                    font-size: 32px;
                    font-weight: 700;
                    color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
                    margin: 0;
                    line-height: 1.2;
                    transition: color 0.3s ease;
                }

                .project-description-card {
                    background: ${isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'white'};
                    border-radius: 12px;
                    padding: 24px;
                    box-shadow: ${isDarkMode
                ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                : '0 4px 20px rgba(0, 0, 0, 0.08)'};
                    border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#f0f0f0'};
                    position: relative;
                    z-index: 3;
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }

                .project-card.reversed .project-description-card {
                    margin-right: -40px;
                }

                .project-card:not(.reversed) .project-description-card {
                    margin-left: -40px;
                }

                .project-description {
                    font-size: 16px;
                    line-height: 1.7;
                    color: ${isDarkMode ? '#cbd5e1' : '#555'};
                    margin: 0;
                    transition: color 0.3s ease;
                }

                /* Tech Stack */
                .project-tech-section {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .tech-label {
                    display: inline-flex;
                }

                .tech-label-text {
                    font-size: 13px;
                    font-weight: 600;
                    color: #3498db;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .project-tech-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .tech-tag {
                    display: inline-block;
                    padding: 8px 16px;
                    background: ${isDarkMode
                ? 'rgba(52, 152, 219, 0.15)'
                : 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)'};
                    color: ${isDarkMode ? '#60a5fa' : '#3498db'};
                    font-size: 14px;
                    font-weight: 600;
                    border-radius: 8px;
                    border: 1px solid ${isDarkMode ? 'rgba(52, 152, 219, 0.3)' : '#bbdefb'};
                    transition: all 0.3s ease;
                }

                .tech-tag:hover {
                    background: linear-gradient(135deg, #3498db 0%, #8b5cf6 100%);
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
                }

                /* Project Links */
                .project-links {
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .project-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 24px;
                    border-radius: 10px;
                    font-size: 15px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .github-link {
                    background: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#1a1a1a'};
                    color: ${isDarkMode ? '#f1f5f9' : 'white'};
                    border: 2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : '#1a1a1a'};
                }

                .github-link:hover {
                    background: ${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};
                    color: ${isDarkMode ? 'white' : '#1a1a1a'};
                    transform: translateY(-2px);
                    box-shadow: ${isDarkMode
                ? '0 6px 20px rgba(0, 0, 0, 0.3)'
                : '0 6px 20px rgba(0, 0, 0, 0.15)'};
                }

                .demo-link {
                    background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
                    color: white;
                    border: 2px solid transparent;
                }

                .demo-link:hover {
                    background: linear-gradient(135deg, #2980b9 0%, #1c5d8b 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(52, 152, 219, 0.3);
                }

                .link-icon {
                    width: 20px;
                    height: 20px;
                }

                .external-icon {
                    width: 16px;
                    height: 16px;
                    margin-left: auto;
                }

                /* Responsive Design */
                @media (max-width: 968px) {
                    .project-card {
                        grid-template-columns: 1fr;
                        gap: 40px;
                        margin-bottom: 60px;
                    }

                    .project-card.reversed {
                        direction: ltr;
                    }

                    .project-description-card {
                        margin-left: 0 !important;
                        margin-right: 0 !important;
                    }

                    .image-decoration {
                        display: none;
                    }

                    .project-number {
                        font-size: 36px;
                    }

                    .project-title {
                        font-size: 26px;
                    }
                }

                @media (max-width: 640px) {
                    .project-card {
                        gap: 32px;
                        margin-bottom: 48px;
                    }

                    .project-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 8px;
                    }

                    .project-number {
                        font-size: 28px;
                    }

                    .project-title {
                        font-size: 22px;
                    }

                    .project-description-card {
                        padding: 20px;
                    }

                    .project-description {
                        font-size: 15px;
                    }

                    .project-links {
                        flex-direction: column;
                    }

                    .project-link {
                        width: 86%;
                        justify-content: center;
                    }

                    .tech-tag {
                        font-size: 13px;
                        padding: 6px 12px;
                    }

                    .nav-arrow {
                        width: 36px;
                        height: 36px;
                    }

                    .nav-arrow svg {
                        width: 18px;
                        height: 18px;
                    }

                    .image-counter {
                        font-size: 12px;
                        padding: 6px 12px;
                    }
                }
            `}</style>
        </>
    );
}
