import mubarak from "../components/images/mubarak.jpeg";
import travel from '../components/images/travel Website.png'
import ERP from '../components/images/ERP.png'

export const projects = [
    {
        id: 1,
        img: mubarak,
        title: "Mubarak Enterprises",
        description: "A website for a local business, Mubarak \n Enterprises. Built using React.js, Node.js, Express.js, \n MongoDB, and Bootstrap.",
        languages: {
            lang1: "React Js",
            lang2: "Node Js",
            lang3: "Express Js",
            lang4: "MongoDB",
        },
        links1: {
            code: "Code",
            ico: "https://img.icons8.com/ios-filled/50/github.png",
            url: "https://github.com/AsyadNazeem/Mubarak-Products"
        },
        links2: {
            demo: "Demo",
            ico: "https://img.icons8.com/ios-filled/50/domain.png"
        }
    },
    {
        id: 2,
        img: travel,
        title: "Travel Website",
        description: "A front-end web design for a Travel \n Website Created Using HTML, CSS/BootStrap and JavaScript",
        languages: {
            lang1: "HTML",
            lang2: "CSS/Bootstrap",
            lang3: "JavaScript",
        },
        links1: {
            code: "Code",
            ico: "https://img.icons8.com/ios-filled/50/github.png",
            url:"https://github.com/AsyadNazeem/Travel-webpage-home-page-design"
        },
        links2: {
            demo: "Demo",
            ico: "https://img.icons8.com/ios-filled/50/domain.png"
        }
    },
    {
        id: 3,
        img: ERP,
        title: "Enterprise Resource Planning System",
        description: "An Enterprise Resource Planning System \n did as an Individual project for an university assignment \n using HTML,CSS/BootStrap, JavaScript, " +
            " \n PHP and MySql. ",
        languages: {
            lang1: "HTML",
            lang2: "CSS/Bootstrap",
            lang3: "JavaScript",
            lang4: "PHP",
            lang5: "MySQL",
        },
        links1: {
            code: "Code",
            ico: "https://img.icons8.com/ios-filled/50/github.png",
            url:"https://github.com/AsyadNazeem/ERP-project"
        },
        links2: {
            demo: "Demo",
            ico: "https://img.icons8.com/ios-filled/50/domain.png"
        }
    },
]