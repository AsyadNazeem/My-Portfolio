import React from 'react';
import { MapPin, Phone, Mail, FileText, Download, ArrowRight, Send } from 'lucide-react';
import { useDarkMode } from './DarkModeContext';

export default function ContactSection({ onViewResume, onDownloadResume }) {
    const { isDarkMode } = useDarkMode();

    const contactInfo = [
        {
            icon: <MapPin className="contact-icon" />,
            title: "Location",
            value: "Colombo, Sri Lanka",
            gradient: "from-red-500 to-orange-500"
        },
        {
            icon: <Phone className="contact-icon" />,
            title: "Phone",
            value: "+94 76 809 4431",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: <Mail className="contact-icon" />,
            title: "Email",
            value: "asyadnazeem@gmail.com",
            gradient: "from-blue-500 to-purple-500"
        }
    ];

    return (
        <>
            <section className="contact-section" id="contact">
                <div className="contact-container">
                    {/* Header */}
                    <div className="contact-header">
                        <div className="contact-badge">
                            <Send className="badge-icon" />
                            <span>Get In Touch</span>
                        </div>
                        <h2 className="contact-title">Let's Connect</h2>
                        <p className="contact-subtitle">
                            Want to collaborate on a project or just want to say hi? I'd love to hear from you!
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="contact-cards-grid">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="contact-card">
                                <div className={`contact-card-icon bg-gradient-${item.gradient}`}>
                                    {item.icon}
                                </div>
                                <h4 className="contact-card-title">{item.title}</h4>
                                <p className="contact-card-value">{item.value}</p>
                                <div className="contact-card-overlay"></div>
                            </div>
                        ))}
                    </div>

                    {/* Resume Section */}
                    <div className="resume-section">
                        <div className="resume-content">
                            <div className="resume-icon">
                                <FileText className="file-icon" />
                            </div>
                            <div className="resume-text">
                                <h3 className="resume-title">Interested in My Work?</h3>
                                <p className="resume-description">
                                    Explore my resume for a comprehensive look at my skills, experience, and projects.
                                </p>
                            </div>
                        </div>
                        <div className="resume-buttons">
                            <button className="resume-button view-button" onClick={onViewResume}>
                                <FileText className="button-icon" />
                                <span>View Resume</span>
                                <ArrowRight className="button-arrow" />
                            </button>
                            <button className="resume-button download-button" onClick={onDownloadResume}>
                                <Download className="button-icon" />
                                <span>Download Resume</span>
                            </button>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="cta-section">
                        <div className="cta-content">
                            <h3 className="cta-title">Ready to Start a Conversation?</h3>
                            <p className="cta-text">
                                Whether you have a project in mind, need consultation, or just want to connect,
                                feel free to reach out. I'm always open to discussing new opportunities!
                            </p>
                            <a href="mailto:asyadnazeem@gmail.com" className="cta-button">
                                <Mail className="cta-icon" />
                                <span>Send me an Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .contact-section {
          background: ${isDarkMode
                ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                : 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'};
          padding: 80px 20px;
          transition: background 0.3s ease;
        }

        .contact-container {
          max-width: 1030px;
          margin: 0 auto;
        }

        /* Header Styles */
        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .contact-badge {
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

        .contact-title {
          font-size: 48px;
          font-weight: 700;
          color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
          margin-bottom: 20px;
          line-height: 1.2;
          transition: color 0.3s ease;
        }

        .contact-subtitle {
          font-size: 18px;
          color: ${isDarkMode ? '#cbd5e1' : '#666'};
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
          transition: color 0.3s ease;
        }

        /* Contact Cards Grid */
        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        .contact-card {
          background: ${isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'white'};
          border-radius: 20px;
          padding: 36px 24px;
          text-align: center;
          box-shadow: ${isDarkMode
                ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                : '0 4px 20px rgba(0, 0, 0, 0.08)'};
          transition: all 0.3s ease;
          border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#f0f0f0'};
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: ${isDarkMode
                ? '0 12px 40px rgba(0, 0, 0, 0.5)'
                : '0 12px 40px rgba(0, 0, 0, 0.15)'};
          border-color: ${isDarkMode ? 'rgba(52, 152, 219, 0.3)' : 'transparent'};
        }

        .contact-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${isDarkMode
                ? 'linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
                : 'linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)'};
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .contact-card:hover .contact-card-overlay {
          opacity: 1;
        }

        .contact-card-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .bg-gradient-from-red-500 {
          background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
        }

        .bg-gradient-from-green-500 {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .bg-gradient-from-blue-500 {
          background: linear-gradient(135deg, #3498db 0%, #8b5cf6 100%);
        }

        .contact-card:hover .contact-card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .contact-icon {
          width: 32px;
          height: 32px;
        }

        .contact-card-title {
          font-size: 16px;
          font-weight: 600;
          color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .contact-card-value {
          font-size: 16px;
          color: ${isDarkMode ? '#cbd5e1' : '#555'};
          margin: 0;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        /* Resume Section */
        .resume-section {
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

        .resume-content {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 32px;
        }

        .resume-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #3498db 0%, #8b5cf6 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .file-icon {
          width: 40px;
          height: 40px;
          color: white;
        }

        .resume-text {
          flex: 1;
        }

        .resume-title {
          font-size: 26px;
          font-weight: 700;
          color: ${isDarkMode ? '#f1f5f9' : '#1a1a1a'};
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .resume-description {
          font-size: 16px;
          color: ${isDarkMode ? '#cbd5e1' : '#666'};
          margin: 0;
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        .resume-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .resume-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .view-button {
          background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
          color: white;
          flex: 1;
          min-width: 200px;
        }

        .view-button:hover {
          background: linear-gradient(135deg, #2980b9 0%, #1c5d8b 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(52, 152, 219, 0.3);
        }

        .download-button {
          background: ${isDarkMode ? 'rgba(52, 152, 219, 0.15)' : 'white'};
          color: #3498db;
          border: 2px solid #3498db;
          flex: 1;
          min-width: 200px;
        }

        .download-button:hover {
          background: #3498db;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(52, 152, 219, 0.2);
        }

        .button-icon {
          width: 20px;
          height: 20px;
        }

        .button-arrow {
          width: 18px;
          height: 18px;
          margin-left: auto;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3498db 100%);
          border-radius: 20px;
          padding: 48px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(139, 92, 246, 0.3);
        }

        .cta-content {
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 32px;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .cta-text {
          font-size: 17px;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 32px;
          line-height: 1.7;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: white;
          color: #8b5cf6;
          padding: 16px 40px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          background: #f8f9fa;
        }

        .cta-icon {
          width: 22px;
          height: 22px;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .contact-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .contact-title {
            font-size: 36px;
          }

          .resume-section {
            padding: 36px;
          }

          .resume-content {
            flex-direction: column;
            text-align: center;
          }

          .resume-buttons {
            flex-direction: column;
          }

          .resume-button {
            width: 100%;
          }

          .cta-section {
            padding: 40px 32px;
          }

          .cta-title {
            font-size: 26px;
          }
        }

        @media (max-width: 640px) {
          .contact-section {
            padding: 60px 16px;
          }

          .contact-title {
            font-size: 32px;
          }

          .contact-subtitle {
            font-size: 16px;
          }

          .contact-card {
            padding: 28px 20px;
          }

          .resume-section {
            padding: 28px 20px;
          }

          .resume-title {
            font-size: 22px;
          }

          .resume-description {
            font-size: 15px;
          }

          .cta-section {
            padding: 32px 24px;
          }

          .cta-title {
            font-size: 24px;
          }

          .cta-text {
            font-size: 15px;
          }
        }
      `}</style>
        </>
    );
}
