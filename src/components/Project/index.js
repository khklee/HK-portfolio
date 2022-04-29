import React from 'react';
import candy from '../../assets/images/projects/candy inventory.png';
import crypto from '../../assets/images/projects/Crypto-Checker.png';
import tech from '../../assets/images/projects/tech-journal.png';
import weather from '../../assets/images/projects/weather dashboard.png';
import task from '../../assets/images/projects/Taskmaster Pro.png';
import password from '../../assets/images/projects/password generator.png';
import githubImg from '../../assets/images/Github.png';


function Project() {
    return (
        <div className='container'>
            <h2 className='sec-title' id='projects'>Portfolio</h2>
            <div className='project'>
                <img className='proj-img' src={tech} alt="screenshot of tech-journal"/>
                <div className='centered'>
                    <h3>Tech Journal                 
                        <a href="https://github.com/khklee/Tech-Journal" target="_blank" rel="noopener noreferrer">
                            &nbsp;<img className='git-img' src={githubImg} alt='github'/>
                        </a>
                    </h3>
                    <h4>JavaScript/Node.js/<br/>Express.js/MySQL/CSS</h4>
                </div>
            </div>
            <div className='project'>
                <img className='proj-img' src={candy} alt="screentshot of Candy shop" />
                <div className='centered'>
                    <h3>Candy Inventory
                        <a href=" https://github.com/CMahoney12/Candy-Shop-Inventory" target="_blank" rel="noopener noreferrer">
                            &nbsp;<img className='git-img' src={githubImg} alt='github'/>
                        </a>
                    </h3>
                    <h4>HTML/CSS/JavaScript/Node.js/<br/>Express.js/MySQL</h4>
                </div>
            </div>
            <div className='project'>
                <img className='proj-img' src={crypto} alt="screentshot of Crypto-Checker"/>
                <div className='centered'>
                    <h3>Crypto-Checker                   
                        <a href="https://github.com/BullMooseDev/Crypto-Checker" target="_blank" rel="noopener noreferrer">
                            &nbsp;<img className='git-img' src={githubImg} alt='github'/>
                        </a>
                    </h3>
                    <h4>HTML/CSS/JavaScript/API</h4>
                </div>
            </div>
            <div className='project'>
                <img className='proj-img' src={weather} alt="screentshot of Weather-Dashboard"/>
                <div className='centered'>
                    <h3>Weather-Dashboard
                        <a href="https://github.com/khklee/Weather-Dashboard" target="_blank" rel="noopener noreferrer">
                            &nbsp;<img className='git-img' src={githubImg} alt='github'/>
                        </a>
                    </h3>
                    <h4>HTML/CSS/JavaScript/API</h4>
                </div>
            </div>
            <div className='project'>
                <img className='proj-img' src={task} alt="screentshot of Taskmaster"/>
                <div className='centered'>
                    <h3>Taskmaster
                        <a href="https://github.com/khklee/taskmaster-pro" target="_blank" rel="noopener noreferrer">
                            &nbsp;<img className='git-img' src={githubImg} alt='github'/>
                        </a>    
                    </h3>
                    <h4>HTML/CSS/JavaScript</h4>
                </div>
            </div>
            <div className='project'>
                <img className='proj-img' src={password} alt="screentshot of Password-Generator"/>
                <div className='centered'>
                    <h3>Password-Generator
                        <a href="https://github.com/khklee/Password-Generator" target="_blank" rel="noopener noreferrer">
                            &nbsp;<img className='git-img' src={githubImg} alt='github'/>
                        </a>
                    </h3>
                    <h4>HTML/CSS/JavaScript</h4>
                </div>
            </div>
        </div>
    )
}

export default Project;