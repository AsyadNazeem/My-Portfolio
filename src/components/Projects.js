import React from "react";
import {projects} from "../Data/Data";

const isEven = projects.map((item, index) => {
    return index % 2 === 0;
});

export default function Projects(prop) {
    const index = prop.item.id - 1; // Assuming the ID starts from 1
    const even = isEven[index];

    return (
        <div>
            <div className={even ? "project1" : "project2"}>
                <div className="project-img">
                    <img src={prop.item.img} alt="mubarak web"/>
                </div>
                <div className="project-details">
                    <h1 className="project-heading">{prop.item.title}</h1>
                    <p className="project-paragraph">{prop.description}</p>
                    <div className="used-languages">
                        <div className="lang">
                            <h1>{prop.item.languages.lang1}</h1>
                        </div>
                        <div className="lang">
                            <h1>{prop.item.languages.lang2}</h1>
                        </div>
                        <div className="lang">
                            <h1>{prop.item.languages.lang3}</h1>
                        </div>
                        <div className="lang">
                            <h1>{prop.item.languages.lang4}</h1>
                        </div>
                    </div>
                    <div className="links">
                        <div className="mubarak-github">
                            <div className="mubarak-code">
                                <h1>{prop.item.links1.code}</h1>
                            </div>
                            <div>
                                <a href={prop.item.links1.url} target="_blank" rel="noreferrer">
                                    <img className='mubarak-img' src={prop.item.links1.ico} alt="github"/>
                                </a>
                            </div>
                        </div>
                        <div className="mubarak-website">
                            <div className="mubarak-code">
                                <h1>{prop.item.links2.demo}</h1>
                            </div>
                            <div>
                                <img className='mubarak-img'
                                     src={prop.item.links2.ico}
                                     alt="website"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}