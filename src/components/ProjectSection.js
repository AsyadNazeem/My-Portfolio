import React, { useState } from 'react';
import { useDarkMode } from './DarkModeContext';
import { projects } from "../Data/Data";
import Project from "./Projects";

export default function ProjectsWrapper() {
    const { isDarkMode } = useDarkMode();
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = [
        'All',
        'Full Stack Development',
        'Data Analysis',
        'Business Analysis',
        'Project Management'
    ];

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <>
            <section className="projects-section" id="projects">
                <div className="projects-container">
                    <div className="projects-header">
                        <div className="projects-badge">
                            <span>Portfolio</span>
                        </div>
                        <h2 className="projects-title">Featured Projects</h2>
                        <p className="projects-subtitle">
                            Here are a few projects I've worked on recently
                        </p>

                        {/* Category Filter Buttons */}
                        <div className="filter-buttons">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    <span className="button-text">{category}</span>
                                    <div className="liquid-effect"></div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="projects-content">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <Project key={project.id} item={project} index={index} />
                            ))
                        ) : (
                            <div className="no-projects">
                                <p>No projects found in this category yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .projects-section {
                    background: ${isDarkMode
                ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
                : 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'};
                    padding: 80px 20px;
                    transition: background 0.3s ease;
                }

                .projects-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .projects-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .projects-badge {
                    display: inline-block;
                    margin-bottom: 20px;
                }

                .projects-badge span {
                    font-size: 14px;
                    font-weight: 600;
                    color: #3498db;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    background: ${isDarkMode ? 'rgba(52, 152, 219, 0.15)' : '#e3f2fd'};
                    padding: 10px 24px;
                    border-radius: 30px;
                    transition: background 0.3s ease;
                }

                .projects-title {
                    font-size: 48px;
                    font-weight: 700;
                    color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
                    margin-bottom: 20px;
                    line-height: 1.2;
                    transition: color 0.3s ease;
                }

                .projects-subtitle {
                    font-size: 20px;
                    color: ${isDarkMode ? '#cbd5e1' : '#666'};
                    max-width: 700px;
                    margin: 0 auto 40px;
                    line-height: 1.6;
                    transition: color 0.3s ease;
                }

                /* Filter Buttons */
                .filter-buttons {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 16px;
                    margin-top: 40px;
                }

                .filter-button {
                    position: relative;
                    padding: 14px 28px;
                    font-size: 15px;
                    font-weight: 600;
                    color: ${isDarkMode ? '#cbd5e1' : '#555'};
                    background: ${isDarkMode
                ? 'rgba(30, 41, 59, 0.4)'
                : 'rgba(255, 255, 255, 0.4)'};
                    border: 1px solid ${isDarkMode
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(0, 0, 0, 0.1)'};
                    border-radius: 50px;
                    cursor: pointer;
                    overflow: hidden;
                    backdrop-filter: blur(10px);
                    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                    box-shadow: ${isDarkMode
                ? '0 4px 15px rgba(0, 0, 0, 0.2)'
                : '0 4px 15px rgba(0, 0, 0, 0.08)'};
                }

                .button-text {
                    position: relative;
                    z-index: 2;
                    transition: color 0.4s ease;
                }

                .liquid-effect {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #3498db 0%, #8b5cf6 100%);
                    transform: translate(-50%, -50%);
                    transition: width 0.6s cubic-bezier(0.23, 1, 0.32, 1), 
                                height 0.6s cubic-bezier(0.23, 1, 0.32, 1);
                    z-index: 1;
                }

                .filter-button:hover {
                    transform: translateY(-3px);
                    box-shadow: ${isDarkMode
                ? '0 8px 25px rgba(52, 152, 219, 0.3)'
                : '0 8px 25px rgba(52, 152, 219, 0.2)'};
                    border-color: rgba(52, 152, 219, 0.5);
                }

                .filter-button:hover .liquid-effect {
                    width: 300px;
                    height: 300px;
                }

                .filter-button:hover .button-text {
                    color: white;
                }

                .filter-button.active {
                    background: linear-gradient(135deg, #3498db 0%, #8b5cf6 100%);
                    color: white;
                    border-color: transparent;
                    box-shadow: 0 8px 25px rgba(52, 152, 219, 0.4);
                    transform: translateY(-2px);
                }

                .filter-button.active .button-text {
                    color: white;
                }

                .filter-button.active .liquid-effect {
                    width: 300px;
                    height: 300px;
                    background: linear-gradient(135deg, #2980b9 0%, #7c3aed 100%);
                }

                .filter-button:active {
                    transform: translateY(-1px);
                }

                /* No Projects Message */
                .no-projects {
                    text-align: center;
                    padding: 60px 20px;
                    color: ${isDarkMode ? '#cbd5e1' : '#666'};
                    font-size: 18px;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .filter-buttons {
                        gap: 12px;
                    }

                    .filter-button {
                        padding: 12px 20px;
                        font-size: 14px;
                    }
                }

                @media (max-width: 640px) {
                    .projects-title {
                        font-size: 36px;
                    }

                    .projects-subtitle {
                        font-size: 16px;
                    }

                    .filter-buttons {
                        gap: 10px;
                    }

                    .filter-button {
                        padding: 10px 18px;
                        font-size: 13px;
                    }
                }
            `}</style>
        </>
    );
}
