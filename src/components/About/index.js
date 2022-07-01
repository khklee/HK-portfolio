import React from 'react';
import Skill from '../Skill';

function About() {
    return (
        <section className='container' id='about-page'>
            <h1 className='title lineUp'>About</h1>
            <h2 className='sec-title'>Kelly Hyunkyoung Lee</h2>
            <p className='about-text'>
                I am an allround web developer with good knowledge of front-end and back-end techniques.
                I love structure and order and I also stand for quality. 
                I focus on user-friendly and crafting clean experiences and websites.
                I also like working and cooperating in a team because
            </p> 
            <p className='highlighted'>
                'two hands are better than one'!
            </p>
            <p className='about-text'>    
                Little more personal information about me, I'm a mom of two adorable girls running all over the place.
                My favorite dessert is chocolate ice cream and my family loves to go to camping and fishing.
            </p>
            <Skill></Skill>
        </section>

        
    );
}

export default About;