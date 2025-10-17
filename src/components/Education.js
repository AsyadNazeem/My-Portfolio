import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { useDarkMode } from './DarkModeContext';

export default function EducationSection() {
    const { isDarkMode } = useDarkMode();

    const education = [
        {
            degree: "BSc (Hons) in Software Engineering",
            period: "May 2023 – Present",
            institution: "ICBT Campus, Colombo",
            description: "I'm currently pursuing my degree in Software Engineering at ICBT Campus, where I continue exploring advanced topics like AI, software design, and system architecture. I enjoy combining creativity with logic to solve real-world problems.",
            highlights: [
                "Focusing on full-stack development, data analysis, and automation projects.",
                "Current Project: Building a machine learning model to predict agricultural productivity."
            ],
            status: "completed"
        },
        {
            degree: "Higher Diploma in Software Engineering & Computing",
            period: "March 2021 – October 2022",
            institution: "ICBT Campus, Colombo",
            description: "This program gave me the technical foundation I needed — from programming and databases to project management and system design. It was where I learned how to turn ideas into working applications.",
            highlights: [
                "Gained experience in PHP, MySQL, and object-oriented programming.",
                "Final Project: Developed a Fuel Management System with real-time tracking and reporting features."
            ],
            status: "completed"
        }
    ];

    return (
        <>
            <section className="education-section" id="education">
                <div className="education-container">
                    {/* Header */}
                    <div className="education-header">
                        <div className="education-badge">
                            <GraduationCap className="badge-icon" />
                            <span>Education</span>
                        </div>
                        <h2 className="education-title">Academic Journey</h2>
                        <p className="education-intro">
                            My academic path has been a journey of curiosity and growth — blending software engineering theory with hands-on
                            project experience. Each milestone helped me build stronger technical, analytical, and problem-solving skills.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="education-timeline">
                        {education.map((item, index) => (
                            <div key={index} className="education-card">
                                <div className="timeline-marker">
                                    <div className="marker-dot"></div>
                                    <div className="marker-line"></div>
                                </div>

                                <div className="education-card-content">
                                    <div className="education-card-header">
                                        <div className="degree-info">
                                            <h3 className="degree-title">{item.degree}</h3>
                                            <div className="degree-meta">
                                                <div className="meta-item">
                                                    <Calendar className="meta-icon" />
                                                    <span>{item.period}</span>
                                                </div>
                                                <div className="meta-item">
                                                    <Award className="meta-icon" />
                                                    <span>{item.institution}</span>
                                                </div>
                                            </div>
                                        </div>
                                        {item.status === 'current' && (
                                            <div className="status-badge">
                                                <span>In Progress</span>
                                            </div>
                                        )}
                                    </div>

                                    <p className="education-description">{item.description}</p>

                                    <div className="highlights-section">
                                        <div className="highlights-header">
                                            <BookOpen className="highlights-icon" />
                                            <span>Key Highlights</span>
                                        </div>
                                        <ul className="highlights-list">
                                            {item.highlights.map((highlight, idx) => (
                                                <li key={idx}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .education-section {
                    background: ${isDarkMode
                ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'};
                    padding: 80px 20px;
                    transition: background 0.3s ease;
                }

                .education-container {
                    max-width: 1030px;
                    margin: 0 auto;
                }

                /* Header Styles */
                .education-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .education-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 20px;
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

                .badge-icon {
                    width: 18px;
                    height: 18px;
                }

                .education-title {
                    font-size: 48px;
                    font-weight: 700;
                    color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
                    margin-bottom: 20px;
                    line-height: 1.2;
                    transition: color 0.3s ease;
                }

                .education-intro {
                    font-size: 18px;
                    color: ${isDarkMode ? '#cbd5e1' : '#666'};
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.7;
                    transition: color 0.3s ease;
                }

                /* Timeline */
                .education-timeline {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 48px;
                }

                /* Education Card */
                .education-card {
                    display: flex;
                    gap: 32px;
                    position: relative;
                }

                .timeline-marker {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-shrink: 0;
                }

                .marker-dot {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #3498db 0%, #8b5cf6 100%);
                    box-shadow: 0 0 0 6px ${isDarkMode
                ? 'rgba(52, 152, 219, 0.2)'
                : 'rgba(52, 152, 219, 0.15)'};
                    position: relative;
                    z-index: 2;
                    transition: all 0.3s ease;
                }

                .education-card:hover .marker-dot {
                    box-shadow: 0 0 0 10px ${isDarkMode
                ? 'rgba(52, 152, 219, 0.3)'
                : 'rgba(52, 152, 219, 0.25)'};
                    transform: scale(1.2);
                }

                .marker-line {
                    width: 2px;
                    flex: 1;
                    background: ${isDarkMode
                ? 'linear-gradient(180deg, #3498db 0%, rgba(52, 152, 219, 0.2) 100%)'
                : 'linear-gradient(180deg, #3498db 0%, rgba(52, 152, 219, 0.3) 100%)'};
                    margin-top: 8px;
                }

          
                /* Card Content */
                .education-card-content {
                    flex: 1;
                    background: ${isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'white'};
                    border-radius: 20px;
                    padding: 36px;
                    box-shadow: ${isDarkMode
                ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                : '0 4px 20px rgba(0, 0, 0, 0.08)'};
                    transition: all 0.3s ease;
                    border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#f0f0f0'};
                    backdrop-filter: blur(10px);
                }

                .education-card:hover .education-card-content {
                    box-shadow: ${isDarkMode
                ? '0 8px 30px rgba(0, 0, 0, 0.5)'
                : '0 8px 30px rgba(0, 0, 0, 0.12)'};
                    transform: translateY(-4px);
                    border-color: ${isDarkMode ? 'rgba(52, 152, 219, 0.3)' : '#bbdefb'};
                }

                .education-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 20px;
                    gap: 20px;
                }

                .degree-info {
                    flex: 1;
                }

                .degree-title {
                    font-size: 24px;
                    font-weight: 700;
                    color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
                    margin-bottom: 12px;
                    line-height: 1.3;
                    transition: color 0.3s ease;
                }

                .degree-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    color: ${isDarkMode ? '#94a3b8' : '#666'};
                    transition: color 0.3s ease;
                }

                .meta-icon {
                    width: 16px;
                    height: 16px;
                    color: #3498db;
                }

                .status-badge {
                    flex-shrink: 0;
                }

                .status-badge span {
                    display: inline-block;
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                    color: white;
                    font-size: 12px;
                    font-weight: 600;
                    padding: 8px 16px;
                    border-radius: 20px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .education-description {
                    font-size: 16px;
                    line-height: 1.7;
                    color: ${isDarkMode ? '#cbd5e1' : '#555'};
                    margin-bottom: 24px;
                    transition: color 0.3s ease;
                }

                /* Highlights Section */
                .highlights-section {
                    background: ${isDarkMode
                ? 'rgba(15, 23, 42, 0.5)'
                : 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)'};
                    border-radius: 12px;
                    padding: 24px;
                    border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#e3f2fd'};
                    transition: all 0.3s ease;
                }

                .highlights-header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 16px;
                    font-size: 15px;
                    font-weight: 600;
                    color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
                    transition: color 0.3s ease;
                }

                .highlights-icon {
                    width: 18px;
                    height: 18px;
                    color: #3498db;
                }

                .highlights-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .highlights-list li {
                    position: relative;
                    padding-left: 28px;
                    font-size: 15px;
                    color: ${isDarkMode ? '#cbd5e1' : '#444'};
                    line-height: 1.6;
                    transition: color 0.3s ease;
                }

                .highlights-list li::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 7px;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #3498db;
                    box-shadow: 0 0 0 3px ${isDarkMode
                ? 'rgba(52, 152, 219, 0.25)'
                : 'rgba(52, 152, 219, 0.2)'};
                }

                /* Responsive Design */
                @media (max-width: 968px) {
                    .education-title {
                        font-size: 36px;
                    }

                    .education-intro {
                        font-size: 16px;
                    }

                    .education-card {
                        gap: 24px;
                    }

                    .education-card-content {
                        padding: 28px;
                    }

                    .degree-title {
                        font-size: 20px;
                    }
                }

                @media (max-width: 640px) {
                    .education-section {
                        padding: 60px 16px;
                    }

                    .education-title {
                        font-size: 32px;
                    }

                    .education-intro {
                        font-size: 15px;
                    }

                    .education-card {
                        gap: 16px;
                    }

                    .education-card-content {
                        padding: 24px;
                    }

                    .education-card-header {
                        flex-direction: column;
                        gap: 12px;
                    }

                    .status-badge {
                        align-self: flex-start;
                    }

                    .degree-meta {
                        flex-direction: column;
                        gap: 8px;
                    }

                    .degree-title {
                        font-size: 18px;
                    }

                    .highlights-section {
                        padding: 20px;
                    }

                    .marker-dot {
                        width: 16px;
                        height: 16px;
                    }
                }
            `}</style>
        </>
    );
}
