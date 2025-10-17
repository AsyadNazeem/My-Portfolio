import mubarak from "../components/images/mubarak.png";
import parkinson from '../components/images/parkinson.png';
import ERP from '../components/images/ERP.png';
import BikeSales1 from '../components/images/Worksheet.png';
import BikeSales2 from '../components/images/PivoteTable.png';
import BikeSales3 from '../components/images/Dashboard.png';
import Sql1 from '../components/images/SQL1.png';
import Sql2 from '../components/images/SQL2.png';
import Sql3 from '../components/images/SQL3.png';



export const projects = [
    {
        "id": 1,
        "img": mubarak, // Keep this for backward compatibility
        "images": [mubarak], // New: Array of images (max 5)
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
        "images": [parkinson], // Two images for this project
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
        "images": [ERP], // Maximum 5 images
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

    {
        "id": 4,
        "img": BikeSales1,
        "images": [BikeSales1,BikeSales2,BikeSales3], // Maximum 5 images
        "title": "Sales Data Analysis & Visualization",
        "description": "Conducted a full-cycle sales data analysis using **Microsoft Excel**, mastering **data cleaning, aggregation, and conditional formatting**. Successfully built comprehensive **dashboards and Pivot Tables** to effectively visualize sales trends and communicate actionable business insights.",
        "category": "Data Analysis",
        "languages": {
            "lang1": "Microsoft Excel",
            "lang2": "Pivot Tables",
            "lang3": "Data Aggregation",
            "lang4": "Conditional Formatting",
            "lang5": "Data Visualization"
        },
        "links1": {
            "code": "Report/Workbook",
            "ico": "https://img.icons8.com/ios-filled/50/document--v1.png",
            "url": "[Insert link to your Excel workbook or PDF report here]"
        }
    },
    {
        "id": 6,
        "img": Sql1,
        "images": [Sql1,Sql2,Sql3], // Maximum 5 images
        "title": "Advanced SQL Analysis, Ranking, and Automation",
        "description": "Executed complex employee data analysis using **Advanced SQL**. Utilized **Window Functions** for calculating rolling aggregates and employee rankings by salary. Implemented **CTEs** for modular queries, and leveraged **Stored Procedures, Triggers, and Events** for database automation and management.",
        "category": "Data Analysis",
        "languages": {
            "lang1": "MySQL",
            "lang2": "Window Functions (RANK, ROW_NUMBER)",
            "lang3": "Common Table Expressions (CTEs)",
            "lang4": "Stored Procedures",
            "lang5": "Triggers & Events (Automation)"
        },
        "links1": {
            "code": "SQL Script (GitHub)",
            "ico": "https://img.icons8.com/ios-filled/50/github.png",
            "url": "[Insert link to your GitHub repository with the final SQL script here]"
        }
    }


]
