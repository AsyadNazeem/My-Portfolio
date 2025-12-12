import mubarak from "../components/images/mubarak.png";
import parkinson from '../components/images/parkinson.png';
import ERP from '../components/images/ERP.png';
import BikeSales1 from '../components/images/Worksheet.png';
import BikeSales2 from '../components/images/PivoteTable.png';
import BikeSales3 from '../components/images/Dashboard.png';
import Sql1 from '../components/images/SQL1.png';
import Sql2 from '../components/images/SQL2.png';
import Sql3 from '../components/images/SQL3.png';
import mubarakBA from "../components/images/MubarakBA.png";
import TapMyNameImg from "../components/images/tapmyname_login.png";
import card from "../components/images/card.png";
import contact from "../components/images/contact.png";
import home from "../components/images/home.png";
import settings from "../components/images/setting.png";


// Import your PDF file
import mubarakBAPdf from '../components/files/Mubarak_BA_Project_Report.pdf';
import BikeSales from '../components/files/ExcelProjectDataset.xlsx';

export const projects = [
    {
        id: 1,
        img: TapMyNameImg, // import this at the top
        images: [TapMyNameImg, home, contact, card, settings],
        title: "TapMyName Digital Contact Card",
        description:
            "A complete digital contact card platform developed using <b>Vite</b>, <b>Node.js</b>, <b>MYSQL</b> and <b>DOCKER</b>. The system supports <b>Google Authentication</b>, <b>JWT based secure sessions</b>, and <b>Google OTP verification</b> for account protection. Users can create personalized contact cards, manage social links, and add their details to the <b>Google Wallet</b> pass format for instant sharing. The platform includes an <b>Admin Panel</b> for user management, analytics, and system control. Designed to deliver a smooth user experience with scalable features for future expansion.",
        category: "Full Stack Development",
        languages: {
            lang1: "Vite",
            lang2: "Node Js",
            lang3: "MYSQL",
            lang4: "DOCKER"
        },
        links1: {
            code: "Code",
            ico: "https://img.icons8.com/ios-filled/50/github.png",
            url: "https://github.com/AsyadNazeem/digital-card.git"
        },
        links2: {
            demo: "Demo",
            ico: "https://img.icons8.com/ios-filled/50/domain.png",
            url: "https://tapmy.name/login"
        }
    },
    {
        "id": 2,
        "img": mubarak,
        "images": [mubarak],
        "title": "Mubarak Products",
        "description": "A website for a <b>local business</b>, Mubarak Enterprises. Built using <b>React.js</b>, <b>Vite</b>, and <b>Tailwind CSS</b> to create a clean and responsive online presence.",
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
        "id": 3,
        "img": parkinson,
        "images": [parkinson],
        "title": "Parkinson's Disease Detection",
        "description": "A <b>full-stack web app</b> developed using <b>Laravel (PHP)</b>, <b>Python</b>, <b>Streamlit</b>, and <b>Scikit-learn</b> to detect <b>Parkinson's Disease</b> from voice measurements. The frontend is styled using <b>HTML</b> and <b>CSS</b>.",
        "category": "Full Stack Development",
        "languages": {
            "lang1": "Python / Streamlit",
            "lang2": "Laravel / PHP / SQL",
            "lang3": "HTML / CSS"
        },
        "links1": {
            "code": "Code",
            "ico": "https://img.icons8.com/ios-filled/50/github.png",
            "url": "https://github.com/AsyadNazeem/parkison-disease-app.git"
        },
        "links2": {
            "demo": "Demo",
            "ico": "https://img.icons8.com/ios-filled/50/domain.png",
            "url": "https://asyadnazeem-parkinsons-detection.streamlit.app/"
        }
    },
    {
        "id": 4,
        "img": ERP,
        "images": [ERP],
        "title": "Enterprise Resource Planning System",
        "description": "An <b>Enterprise Resource Planning System</b> developed as an <b>individual university project</b> using <b>HTML</b>, <b>CSS/Bootstrap</b>, <b>JavaScript</b>, <b>PHP</b>, and <b>MySQL</b> to streamline business operations and management.",
        "category": "Full Stack Development",
        "languages": {
            "lang1": "HTML",
            "lang2": "CSS/Bootstrap",
            "lang3": "JavaScript",
            "lang4": "PHP",
            "lang5": "MySQL"
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
        "id": 5,
        "img": BikeSales1,
        "images": [BikeSales1, BikeSales2, BikeSales3],
        "title": "Sales Data Analysis & Visualization",
        "description": "Conducted a full-cycle <b>sales data analysis</b> using <b>Microsoft Excel</b>, mastering <b>data cleaning</b>, <b>aggregation</b>, and <b>conditional formatting</b>. Successfully built comprehensive <b>dashboards</b> and <b>Pivot Tables</b> to effectively visualize <b>sales trends</b> and communicate <b>actionable business insights</b>.",
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
        },
        file: {
            type: "pdf", // or "doc", "docx"
            path: BikeSales, // imported file path
            name: "ExcelProjectDataset.xlsx" // display name
        }
    },
    {
        "id": 6,
        "img": Sql1,
        "images": [Sql1, Sql2, Sql3],
        "title": "Advanced SQL Analysis, Ranking, and Automation",
        "description": "Executed complex <b>employee data analysis</b> using <b>Advanced SQL</b>. Utilized <b>Window Functions (RANK, ROW_NUMBER)</b> for calculating <b>rolling aggregates</b> and <b>employee rankings</b> by salary. Implemented <b>CTEs</b> for modular queries, and leveraged <b>Stored Procedures</b>, <b>Triggers</b>, and <b>Events</b> for <b>database automation</b> and <b>management</b>.",
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
            "url": "https://github.com/AsyadNazeem/advanced-sql-analysis.git"
        }
    },
    {
        id: 7,
        img: mubarakBA,
        images: [mubarakBA],
        title: "Mubarak Products – Business Analysis Project",
        description:
            "A complete <b>Business Analysis Project</b> conducted for a real-world small-scale family business. Included <b>Stakeholder Analysis</b>, <b>Requirement Gathering</b>, <b>AS-IS & TO-BE Process Mapping</b>, <b>ER & UML Diagrams</b>, and <b>System Design Proposal</b> for digital transformation of the business operations.",
        category: "Business Analysis",
        languages: {
            lang1: "Business Process Modeling (AS-IS / TO-BE)",
            lang2: "Requirement Documentation (FRD / NFRD)",
            lang3: "ER Diagram & UML (Use Case, Activity, Sequence)",
            lang4: "Stakeholder & System Analysis",
            lang5: "System Design Proposal"
        },
        links1: {
            code: "View Project (PDF)",
            ico: "https://img.icons8.com/ios-filled/50/pdf.png",
            url: "https://github.com/AsyadNazeem/Mubarak-Products-BA-Project.git"
        },
        // NEW: Add file property for downloadable/viewable documents
        file: {
            type: "pdf", // or "doc", "docx"
            path: mubarakBAPdf, // imported file path
            name: "Mubarak_BA_Project_Report.pdf" // display name
        }
    }
]
