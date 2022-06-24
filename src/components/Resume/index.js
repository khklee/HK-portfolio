import React from 'react';

function Resume() {
    return(
        <div className='resume-container'>
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
            <p>My 
                <a href='https://docs.google.com/document/d/1PxSVc311p9ro0iSvJysD6-Z5Xyz7L36gEgw9-Ind3vg/edit?usp=sharing'  target="_blank" rel="noreferrer">
                &nbsp;resume
                </a>
            </p>
        </div>
    ) 
}

export default Resume;