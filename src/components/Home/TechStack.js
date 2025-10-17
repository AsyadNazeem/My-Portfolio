import React, {useEffect, useState} from "react";

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
            {/* Add data-name="HTML" to the .logo div */}
            <div className="logo" data-name="HTML">
                <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/color/48/html-5--v1.png"
                    alt="html-5--v1"
                />
            </div>

            {/* Add data-name="CSS3" to the .logo div */}
            <div className="logo" data-name="CSS3">
                <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/color/48/css3.png"
                    alt="css3"
                />
            </div>

            {/* Add data-name="JavaScript" to the .logo div */}
            <div className="logo" data-name="JavaScript">
                <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                    alt="javascript--v1"
                />
            </div>

            {/* ... Continue adding data-name to the rest of the .logo divs ... */}

            <div className="logo" data-name="Laravel">
                <img
                    width="35"
                    src="https://img.icons8.com/?size=100&id=hUvxmdu7Rloj&format=png&color=000000"
                    alt="laravel"
                />
            </div>
            <div className="logo" data-name="React Native">
                <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/color/48/react-native.png"
                    alt="react-native"
                />
            </div>

            <div className="logo" data-name="Node.js">
                <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/color/48/nodejs.png"
                    alt="nodejs"
                />
            </div>
            {/* Conditionally render the empty div for mobile view */}
            {isMobile && <div className="logo"></div>}


            <div className="logo" data-name="MySQL">
                <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"
                    alt="mysql"
                />
            </div>
            <div className="logo" data-name="Excel">
                <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/?size=100&id=Ru0tNwlOUfBH&format=png&color=000000"
                    alt="excel"
                />
            </div>

            <div className="logo" data-name="Jira">
                <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000"
                    alt="jira"
                />
            </div>
            <div className="logo" data-name="Trello">
                <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/?size=100&id=21049&format=png&color=000000"
                    alt="trello"
                />
            </div>
            {/* Conditionally render the empty div for mobile view */}
            {isMobile && <div className="logo"></div>}
            {/* Conditionally render the empty div for mobile view */}
            {isMobile && <div className="logo"></div>}
            {/* Conditionally render the empty div for mobile view */}
            {isMobile && <div className="logo"></div>}

            <div className="logo" data-name="Power BI">
                <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/?size=100&id=3sGOUDo9nJ4k&format=png&color=000000"
                    alt="powerbi"
                />
            </div>
        </div>
    );
};

export default TechStack;
