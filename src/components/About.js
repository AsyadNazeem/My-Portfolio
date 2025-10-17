import React from 'react';
import { Code, Database, TrendingUp, Target, Lightbulb, Users, CheckCircle } from 'lucide-react';
import { useDarkMode } from './DarkModeContext'; // Import the dark mode hook

export default function AboutSection() {
    const { isDarkMode } = useDarkMode();

    const expertiseAreas = [
        {
            icon: <Code className="expertise-icon" />,
            title: "Full-Stack Development",
            description: "React, Laravel, Node.js, PHP & MySQL"
        },
        {
            icon: <Database className="expertise-icon" />,
            title: "Data Analysis",
            description: "Excel, Power BI & Data Visualization"
        },
        {
            icon: <TrendingUp className="expertise-icon" />,
            title: "Business Analysis",
            description: "Requirements & Process Optimization"
        },
        {
            icon: <Target className="expertise-icon" />,
            title: "Project Management",
            description: "Agile, Jira & Team Leadership"
        }
    ];

    const highlights = [
        { icon: <Lightbulb className="highlight-icon" />, text: "Problem-solver who bridges technology with business strategy" },
        { icon: <Users className="highlight-icon" />, text: "Collaborative team player with strong communication skills" },
        { icon: <Target className="highlight-icon" />, text: "Committed to delivering measurable impact and user-centric solutions" }
    ];

    const skills = [
        "Full-Stack Web Development with React, Laravel, Node.js & PHP",
        "Database Design & Management using MySQL",
        "Data Visualization & Reporting with Excel and Power BI",
        "Business Requirements Gathering & Documentation",
        "Agile Project Management with Jira and Trello",
        "Version Control & Collaboration using Git and GitHub",
        "API Development & Integration",
        "Clean Code & User-Centric Design Principles"
    ];

    return (
        <>
            <section className="about-section" id="about">
                <div className="about-container">
                    {/* Header */}
                    <div className="about-header">
                        <div className="about-badge">
                            <span>About Me</span>
                        </div>
                        <h2 className="about-title">Connecting Code, Data & Strategy</h2>
                        <p className="about-subtitle">
                            Building meaningful solutions that bridge technology with real-world impact
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="about-content-grid">
                        {/* Story Section */}
                        <div className="about-story-column">
                            <div className="story-card">
                                <div className="story-card-icon">
                                    <span>👋</span>
                                </div>
                                <h3 className="story-card-title">My Journey</h3>
                                <p className="story-card-text">
                                    I'm <strong>Asyad Nazeem</strong>, a passionate developer and problem-solver based in Colombo, Sri Lanka.
                                    My journey began with building web applications that streamline workflows and enhance user experiences.
                                </p>
                                <p className="story-card-text">
                                    Over time, I've expanded my skills to bridge the worlds of Full-Stack Development, Data Analysis,
                                    Business Analysis, and Project Management — understanding both the technical and business sides of every problem.
                                </p>
                            </div>

                            <div className="drives-card">
                                <h3 className="drives-card-title">What Drives Me</h3>
                                <div className="drives-list">
                                    {highlights.map((item, index) => (
                                        <div key={index} className="drives-item">
                                            <div className="drives-icon">{item.icon}</div>
                                            <p className="drives-text">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Expertise Cards */}
                        <div className="about-expertise-column">
                            <h3 className="expertise-heading">Areas of Expertise</h3>
                            <div className="expertise-cards">
                                {expertiseAreas.map((area, index) => (
                                    <div key={index} className="expertise-card">
                                        <div className="expertise-card-icon">
                                            {area.icon}
                                        </div>
                                        <div className="expertise-card-content">
                                            <h4 className="expertise-card-title">{area.title}</h4>
                                            <p className="expertise-card-description">{area.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="skills-section">
                        <h3 className="skills-title">Technical Skills & Capabilities</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <CheckCircle className="skill-icon" />
                                    <p className="skill-text">{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Closing Statement */}
                    <div className="closing-statement">
                        <div className="closing-content">
                            <p className="closing-text">
                                Whether it's building a web platform, analyzing performance data, or leading a project team,
                                I enjoy every opportunity to create something that makes technology more useful, insightful, and human.
                            </p>
                            <p className="closing-cta">Let's collaborate and build something amazing together!</p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .about-section {
          background: ${isDarkMode
                ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
                : 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'};
          padding: 80px 20px;
          transition: background 0.3s ease;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header Styles */
        .about-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .about-badge {
          display: inline-block;
          margin-bottom: 20px;
        }

        .about-badge span {
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

        .about-title {
          font-size: 48px;
          font-weight: 700;
          color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
          margin-bottom: 20px;
          line-height: 1.2;
          transition: color 0.3s ease;
        }

        .about-subtitle {
          font-size: 20px;
          color: ${isDarkMode ? '#cbd5e1' : '#666'};
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        /* Content Grid */
        .about-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        /* Story Column */
        .about-story-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .story-card {
          background: ${isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'white'};
          border-radius: 20px;
          padding: 40px;
          box-shadow: ${isDarkMode
                ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                : '0 4px 20px rgba(0, 0, 0, 0.08)'};
          transition: all 0.3s ease;
          border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#f0f0f0'};
          backdrop-filter: blur(10px);
        }

        .story-card:hover {
          box-shadow: ${isDarkMode
                ? '0 8px 30px rgba(0, 0, 0, 0.5)'
                : '0 8px 30px rgba(0, 0, 0, 0.12)'};
          transform: translateY(-2px);
          border-color: ${isDarkMode ? 'rgba(52, 152, 219, 0.3)' : '#bbdefb'};
        }

        .story-card-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 24px;
        }

        .story-card-title {
          font-size: 28px;
          font-weight: 700;
          color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }

        .story-card-text {
          font-size: 16px;
          line-height: 1.7;
          color: ${isDarkMode ? '#cbd5e1' : '#555'};
          margin-bottom: 16px;
          transition: color 0.3s ease;
        }

        .story-card-text:last-child {
          margin-bottom: 0;
        }

        .story-card-text strong {
          color: ${isDarkMode ? '#e2e8f0' : '#1a1a1a'};
          font-weight: 600;
        }

        .drives-card {
          background: ${isDarkMode
                ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.8) 100%)'
                : 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)'};
          border-radius: 20px;
          padding: 36px;
          border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#bbdefb'};
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .drives-card-title {
          font-size: 22px;
          font-weight: 700;
          color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }

        .drives-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .drives-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .drives-icon {
          color: #3498db;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .drives-icon svg {
          width: 20px;
          height: 20px;
        }

        .drives-text {
          font-size: 15px;
          color: ${isDarkMode ? '#cbd5e1' : '#444'};
          line-height: 1.5;
          margin: 0;
          transition: color 0.3s ease;
        }

        /* Expertise Column */
        .about-expertise-column {
          display: flex;
          flex-direction: column;
        }

        .expertise-heading {
          font-size: 28px;
          font-weight: 700;
          color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
          margin-bottom: 24px;
          transition: color 0.3s ease;
        }

        .expertise-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .expertise-card {
          background: ${isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'white'};
          border-radius: 16px;
          padding: 28px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          box-shadow: ${isDarkMode
                ? '0 2px 12px rgba(0, 0, 0, 0.3)'
                : '0 2px 12px rgba(0, 0, 0, 0.06)'};
          transition: all 0.3s ease;
          border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#f0f0f0'};
          backdrop-filter: blur(10px);
        }

        .expertise-card:hover {
          box-shadow: ${isDarkMode
                ? '0 6px 24px rgba(0, 0, 0, 0.5)'
                : '0 6px 24px rgba(0, 0, 0, 0.1)'};
          border-color: ${isDarkMode ? 'rgba(52, 152, 219, 0.3)' : '#bbdefb'};
          transform: translateY(-2px);
        }

        .expertise-card-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #3498db 0%, #8b5cf6 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .expertise-card:hover .expertise-card-icon {
          transform: scale(1.1);
        }

        .expertise-icon {
          width: 28px;
          height: 28px;
        }

        .expertise-card-content {
          flex: 1;
        }

        .expertise-card-title {
          font-size: 19px;
          font-weight: 600;
          color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
          margin-bottom: 6px;
          transition: color 0.3s ease;
        }

        .expertise-card-description {
          font-size: 14px;
          color: ${isDarkMode ? '#94a3b8' : '#666'};
          margin: 0;
          transition: color 0.3s ease;
        }

        /* Skills Section */
        .skills-section {
          background: ${isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'white'};
          border-radius: 20px;
          padding: 48px;
          box-shadow: ${isDarkMode
                ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                : '0 4px 20px rgba(0, 0, 0, 0.08)'};
          margin-bottom: 48px;
          border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#f0f0f0'};
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .skills-title {
          font-size: 28px;
          font-weight: 700;
          color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
          text-align: center;
          margin-bottom: 36px;
          transition: color 0.3s ease;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .skill-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: ${isDarkMode ? 'rgba(52, 152, 219, 0.15)' : '#e3f2fd'};
        }

        .skill-icon {
          color: #3498db;
          flex-shrink: 0;
          margin-top: 2px;
          width: 20px;
          height: 20px;
        }

        .skill-text {
          font-size: 15px;
          color: ${isDarkMode ? '#cbd5e1' : '#444'};
          margin: 0;
          line-height: 1.5;
          transition: color 0.3s ease;
        }

        .skill-item:hover .skill-text {
          color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
        }

        /* Closing Statement */
        .closing-statement {
          margin-top: 48px;
        }

        .closing-content {
          background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3498db 100%);
          border-radius: 20px;
          padding: 48px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(139, 92, 246, 0.3);
        }

        .closing-text {
          font-size: 19px;
          line-height: 1.7;
          color: white;
          max-width: 900px;
          margin: 0 auto 24px;
        }

        .closing-cta {
          font-size: 20px;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .about-content-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .about-title {
            font-size: 36px;
          }

          .about-subtitle {
            font-size: 18px;
          }

          .story-card,
          .drives-card,
          .skills-section,
          .closing-content {
            padding: 32px 24px;
          }
        }

        @media (max-width: 640px) {
          .about-section {
            padding: 60px 16px;
          }

          .about-title {
            font-size: 32px;
          }

          .about-subtitle {
            font-size: 16px;
          }

          .story-card,
          .drives-card {
            padding: 24px;
          }

          .expertise-card {
            padding: 20px;
          }

          .skills-section {
            padding: 32px 20px;
          }

          .closing-content {
            padding: 32px 20px;
          }

          .closing-text {
            font-size: 16px;
          }

          .closing-cta {
            font-size: 18px;
          }
        }
      `}</style>
        </>
    );
}
