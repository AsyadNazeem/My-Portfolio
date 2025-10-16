import React, { useState, useEffect } from "react";

const TechStack = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 700); // Adjust the width threshold as needed
      };
  
      handleResize(); // Check on initial load
      window.addEventListener('resize', handleResize);
      
      return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
      <div className="language-logos">
        <div className="logo">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/color/48/html-5--v1.png"
            alt="html-5--v1"
          />
        </div>
        <div className="logo">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/color/48/css3.png"
            alt="css3"
          />
        </div>
        <div className="logo">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/color/48/000000/javascript--v1.png"
            alt="javascript--v1"
          />
        </div>
        <div className="logo">
          <img
            width="65"
            src="https://www.vectorlogo.zone/logos/php/php-ar21.svg"
            alt="php"
          />
        </div>
        <div className="logo">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/color/48/react-native.png"
            alt="react-native"
          />
        </div>
        
        {/* Conditionally render the empty div for mobile view */}
        {isMobile && <div className="logo" ></div>}
        
        <div className="logo">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/color/48/nodejs.png"
            alt="nodejs"
          />
        </div>
        <div className="logo">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"
            alt="mongodb"
          />
        </div>
        <div className="logo">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/color/48/000000/mongodb.png"
            alt="mongodb"
          />
        </div>
      </div>
    );
  };
  
  export default TechStack;
