// Projects.js - Component for individual project items
import React from "react";

export default function Project({ item, index }) {
    const isEven = index % 2 === 0;

    return (
        <div className={`project-item ${!isEven ? 'reversed' : ''}`}>
            <div className="project-image">
                <img src={item.img} alt={item.title} />
            </div>

            <div className="project-details">
                <h3 className="project-title">{item.title}</h3>
                <p className="project-description">{item.description}</p>

                <div className="project-tech-stack">
                    {Object.values(item.languages).filter(lang => lang).map((lang, i) => (
                        <span key={i} className="tech-tag">{lang}</span>
                    ))}
                </div>

                <div className="project-links">
                    <a href={item.links1.url} className="project-link" target="_blank" rel="noreferrer">
                        <img src={item.links1.ico} alt="GitHub" />
                        <span>{item.links1.code}</span>
                    </a>

                    {item.links2.url && (
                        <a href={item.links2.url} className="project-link" target="_blank" rel="noreferrer">
                            <img src={item.links2.ico} alt="Demo" />
                            <span>{item.links2.demo}</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
