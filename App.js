import React from "react";
import ReactDOM from "react-dom/client";
import img from "./Passphoto.jpg"

const Header = () => {
    return (
        <div className="header">
            <div className="identity">
                <img className="photo" src={img} alt="Image" />
                <h1 className="name">Minhaj</h1>
            </div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>AboutMe</li>
                    <li>Projects</li>
                    <li>Gmail</li>
                </ul>
            </div>
        </div>
    );
};

const Project = () => {
    return (
        <div className="body-container">
            <div className="pro-img" >
                <img className="pro-photo" src={img} alt="project image" />

            </div>
            <div className="pro-details">
                <h2 className="pro-name">CheatMeal</h2>
                <p className="pro-info">
                    The food ordering app.
                </p>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div><Project/><Project/><Project/></div>
        
    );
};

const Footer = () => {
    return (
        <div></div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);