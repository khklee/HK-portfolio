import React from 'react';

function Resume() {
    return(
        <section>
            <h2>Resume</h2>
            <p>Download 
                <a href='https://docs.google.com/document/d/1PxSVc311p9ro0iSvJysD6-Z5Xyz7L36gEgw9-Ind3vg/edit?usp=sharing'  target="_blank" rel="noreferrer">
                &nbsp;resume
                </a>
            </p>
            <div>
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
            <div>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>APIs</li>
                    <li>MySQL - Sequelize</li>
                    <li>NoSQL - MongoDB</li>
                    <li>REST</li>
                </ul>
            </div>
        </section>
    ) 
}

export default Resume;