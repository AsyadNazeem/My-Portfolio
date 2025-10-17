import mubarak from "../components/images/mubarak.png";
import parkinson from '../components/images/parkinson.png'
import ERP from '../components/images/ERP.png'

export const projects = [
    {
        "id": 1,
        "img": mubarak,
        "title": "Mubarak Products",
        "description": "A website for a local business, Mubarak \n Enterprises. Built using React.js, Vite and Tailwind.",
        "category": "Full Stack Development",
        "languages": {
            "lang1": "React Js",
            "lang2": "Vite",
            "lang3": "Tailwind"
        },
        "links1": {
            "code": "Code",
            "ico": "https://img.icons8.com/ios-filled/50/github.png",
            "url": "https://github.com/AsyadNazeem/Mubarak-Products"
        },
        "links2": {
            "demo": "Demo",
            "ico": "https://img.icons8.com/ios-filled/50/domain.png",
            "url": "https://asyadnazeem.github.io/mubarak-product/"
        }

    },
    {
        "id": 2,
        "img": parkinson,
        "title": "Parkinson's Disease Detection",
        "description": "A full-stack web app developed using Laravel (PHP), Python, Streamlit, and Scikit-learn to detect Parkinson's Disease from voice measurements. The frontend is styled using HTML and CSS.",
        "category": "Full Stack Development",
        "languages": {
            "lang1": "Python / Streamlit",
            "lang2": "Laravel / PHP / SQL",
            "lang3": "HTML / CSS"
        },
        "links1": {
            "code": "Code",
            "ico": "https://img.icons8.com/ios-filled/50/github.png",
            "url": "https://github.com/AsyadNazeem/parkinsons-disease-detection"
        },
        "links2": {
            "demo": "Demo",
            "ico": "https://img.icons8.com/ios-filled/50/domain.png",
            "url": "https://asyadnazeem-parkinsons-detection.streamlit.app/"
        }
    },
    {
        "id": 3,
        "img": ERP,
        "title": "Enterprise Resource Planning System",
        "description": "An Enterprise Resource Planning System \n did as an Individual project for an university assignment \n using HTML,CSS/BootStrap, JavaScript, " +
            " \n PHP and MySql. ",
        "category": "Full Stack Development",
        "languages": {
            "lang1": "HTML",
            "lang2": "CSS/Bootstrap",
            "lang3": "JavaScript",
            "lang4": "PHP",
            "lang5": "MySQL",
        },
        "links1": {
            "code": "Code",
            "ico": "https://img.icons8.com/ios-filled/50/github.png",
            "url": "https://github.com/AsyadNazeem/ERP-project"
        },
        "links2": {
            "demo": "Demo",
            "ico": "https://img.icons8.com/ios-filled/50/domain.png"
        }
    },
]
