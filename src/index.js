import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

// 1. GA4 Tracking ID
// The actual Measurement ID G-5YWFDHKH6K is now used.
const GA4_MEASUREMENT_ID = 'G-5YWFDHKH6K';

/**
 * Dynamically loads the Google Analytics 4 (gtag.js) script into the document head.
 */
const loadGoogleAnalytics = () => {

    // Standard Google Analytics Setup (gtag.js)
    // This creates the asynchronous script tag corresponding to:
    // <script async src="https://www.googletagmanager.com/gtag/js?id=G-5YWFDHKH6K"></script>
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize the dataLayer and config
    // This sets up the window.dataLayer array and the gtag function corresponding to the second script block.
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag; // Make gtag accessible globally

    gtag('js', new Date());
    gtag('config', GA4_MEASUREMENT_ID);

    console.log(`Google Analytics (ID: ${GA4_MEASUREMENT_ID}) script loaded.`);
};


// Load Google Analytics before rendering the application
loadGoogleAnalytics();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
