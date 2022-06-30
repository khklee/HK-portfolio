import React from 'react';
import resume from '../../assets/KHL Resume 2.0.pdf';

function Skill() {
    return(
        <div className='skill-container'>
            <h2 className='sec-title'>Skills</h2>
            <div className='proficiencies'>
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>JQuery</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className='proficiencies'>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>APIs</li>
                    <li>MySQL - Sequelize</li>
                    <li>NoSQL - MongoDB</li>
                    <li>GraphQl</li>
                    <li>REST</li>
                </ul>
            </div>
            <a href={resume} Download Target="blank">
                <button className='resume-btn'>
                    Resume
                </button>
            </a>
        </div>
    ) 
}

export default Skill;