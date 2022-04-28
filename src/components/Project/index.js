import React from 'react';
import candy from '../../assets/images/projects/candy inventory.png';
import crypto from '../../assets/images/projects/Crypto-Checker.png';
import tech from '../../assets/images/projects/tech-journal.png';
import weather from '../../assets/images/projects/weather dashboard.png';
import task from '../../assets/images/projects/Taskmaster Pro.png';
import password from '../../assets/images/projects/password generator.png';


function Project() {
    return (
        <div>
            <h2>Portfolio</h2>
            <div>
                <a href="https://secure-forest-02686.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={tech} alt="screenshot of tech-journal"/>
                </a>
                <div >
                    <h3>Tech Journal</h3>
                    <h4>JavaScript/Node.js/Express.js/MySQL/CSS</h4>
                </div>
            </div>
            <div >
                <a href="https://candy-shop-e-commerce.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={candy} alt="screentshot of Candy shop" />
                </a>
                <div >
                    <h3>Candy Shop Inventory</h3>
                    <h4>HTML/CSS/JavaScript/Node.js/Express.js/MySQL</h4>
                </div>
            </div>
            <div >
                <a href="https://bullmoosedev.github.io/Crypto-Checker/" target="_blank" rel="noopener noreferrer">
                    <img src={crypto} alt="screentshot of Crypto-Checker"/>
                </a>
                <div >
                    <h3>Crypto-Checker</h3>
                    <h4>HTML/CSS/JavaScript/API</h4>
                </div>
            </div>
            <div >
                <a href=" https://khklee.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
                    <img src={weather} alt="screentshot of Weather-Dashboard"/>
                </a>
                <div class="work-detail">
                    <h3>Weather-Dashboard</h3>
                    <h4>HTML/CSS/JavaScript/API</h4>
                </div>
            </div>
            <div >
                <a href="https://khklee.github.io/taskmaster-pro/" target="_blank" rel="noopener noreferrer">
                    <img src={task} alt="screentshot of Taskmaster"/>
                </a>
                <div >
                    <h3>Taskmaster</h3>
                    <h4>HTML/CSS/JavaScript</h4>
                </div>
            </div>
            <div >
                <a href=" https://khklee.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
                    <img src={password} alt="screentshot of Password-Generator"/>
                </a>
                <div >
                    <h3>Password-Generator</h3>
                    <h4>HTML/CSS/JavaScript</h4>
                </div>
            </div>
        </div>
    )
}

export default Project;