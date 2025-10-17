import React from 'react';
import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react';
import { useDarkMode } from './DarkModeContext';
export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();
    const { isDarkMode } = useDarkMode();

    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    {/* Footer Content */}
                    <div className="footer-content">
                        {/* Brand Section */}
                        <div className="footer-brand">
                            <h2 className="footer-logo">dev.Asyad</h2>
                            <p className="footer-tagline">
                                Building digital experiences with passion and precision
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="footer-social">
                            <a
                                href="https://linkedin.com/in/asyad-nazeem"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link linkedin"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin className="icon" />
                            </a>
                            <a
                                href="https://github.com/AsyadNazeem"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link github"
                                aria-label="GitHub Profile"
                            >
                                <Github className="icon" />
                            </a>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="footer-divider"></div>

                    {/* Bottom Section */}
                    <div className="footer-bottom">
                        <p className="copyright">
                            © {currentYear} Asyad Nazeem. All rights reserved
                        </p>
                        <p className="made-with">
                            Made with <Heart className="heart-icon" /> by Asyad
                        </p>
                    </div>

                    {/* Scroll to Top Button */}
                    <button
                        className="scroll-top-btn"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="arrow-icon" />
                    </button>
                </div>
            </footer>

            <style jsx>{`
                .footer {
                    background: ${isDarkMode
                            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
                            : 'linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%)'};
                    color: white;
                    padding: 60px 20px 30px;
                    position: relative;
                    overflow: hidden;
                }

                .footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #3498db 0%, #8b5cf6 50%, #ec4899 100%);
                }

                .footer::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -20%;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 20s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(30px, 30px); }
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                }

                /* Footer Content */
                .footer-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 40px;
                    gap: 40px;
                }

                .footer-brand {
                    flex: 1;
                }

                .footer-logo {
                    font-size: 28px;
                    font-weight: 700;
                    background: linear-gradient(135deg, #3498db 0%, #8b5cf6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin: 0 0 12px 0;
                    letter-spacing: -0.5px;
                }

                .footer-tagline {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 15px;
                    margin: 0;
                    max-width: 400px;
                    line-height: 1.6;
                }

                /* Social Links */
                .footer-social {
                    display: flex;
                    gap: 16px;
                }

                .social-icon-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }

                .social-icon-link:hover {
                    transform: translateY(-4px);
                    border-color: currentColor;
                }

                .social-icon-link.linkedin {
                    color: #0077b5;
                }

                .social-icon-link.linkedin:hover {
                    background: rgba(0, 119, 181, 0.15);
                    box-shadow: 0 8px 24px rgba(0, 119, 181, 0.3);
                }

                .social-icon-link.github {
                    color: #ffffff;
                }

                .social-icon-link.github:hover {
                    background: rgba(255, 255, 255, 0.15);
                    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
                }

                .social-icon-link .icon {
                    width: 22px;
                    height: 22px;
                }

                /* Divider */
                .footer-divider {
                    height: 1px;
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        rgba(255, 255, 255, 0.2) 50%,
                        transparent 100%
                    );
                    margin-bottom: 30px;
                }

                /* Bottom Section */
                .footer-bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 20px;
                }

                .copyright {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 14px;
                    margin: 0;
                }

                .made-with {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 14px;
                    margin: 0;
                }

                .heart-icon {
                    width: 16px;
                    height: 16px;
                    color: #e74c3c;
                    animation: heartbeat 1.5s ease-in-out infinite;
                }

                @keyframes heartbeat {
                    0%, 100% { transform: scale(1); }
                    10%, 30% { transform: scale(1.1); }
                    20%, 40% { transform: scale(1); }
                }

                /* Scroll to Top Button */
                .scroll-top-btn {
                    position: absolute;
                    bottom: 30px;
                    right: 20px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
                    border: none;
                    color: white;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
                }

                .scroll-top-btn:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 24px rgba(52, 152, 219, 0.4);
                }

                .scroll-top-btn:active {
                    transform: translateY(-2px);
                }

                .arrow-icon {
                    width: 22px;
                    height: 22px;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .footer {
                        padding: 50px 20px 25px;
                    }

                    .footer-content {
                        flex-direction: column;
                        text-align: center;
                        gap: 30px;
                    }

                    .footer-brand {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .footer-tagline {
                        max-width: 100%;
                    }

                    .footer-bottom {
                        flex-direction: column;
                        text-align: center;
                        gap: 12px;
                    }

                    .scroll-top-btn {
                        bottom: 25px;
                        right: 50%;
                        transform: translateX(50%);
                    }

                    .scroll-top-btn:hover {
                        transform: translateX(50%) translateY(-4px);
                    }
                }

                @media (max-width: 480px) {
                    .footer {
                        padding: 40px 16px 20px;
                    }

                    .footer-logo {
                        font-size: 24px;
                    }

                    .footer-tagline {
                        font-size: 14px;
                    }

                    .copyright,
                    .made-with {
                        font-size: 13px;
                    }

                    .social-icon-link {
                        width: 44px;
                        height: 44px;
                    }

                    .social-icon-link .icon {
                        width: 20px;
                        height: 20px;
                    }
                }
            `}</style>
        </>
    );
}
