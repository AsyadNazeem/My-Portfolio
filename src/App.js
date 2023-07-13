import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";


function App() {
    return (
        <div>
            <BrowserRouter basename="My-Portfolio">
                <Navbar/>
                <Routes>
                    <Route path="/My-Portfolio" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
