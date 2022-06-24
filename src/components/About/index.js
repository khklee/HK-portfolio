import React from 'react';
import Resume from '../Resume';
// import avatarImg from '../../assets/images/Avatar.png';

function About() {
    return (
        <section className='my-5 about-container'>
            <h1 className='nav-title'>About</h1>
            <h2 className='sec-title' id='about'>Kelly Hyunkyoung Lee</h2>
            {/* <img src={avatarImg} className='my-2' alt='avatar'/> */}
            <p>
                I am an allround web developer with good knowledge of front-end and back-end techniques.
                I love structure and order and I also stand for quality. 
                I focus on user-friendly and crafting clean experiences and websites.
                I also like working and cooperating in a team because 'two hands are better than one'!
                Little more personal information about me, I'm a mom of two adorable girls running all over the place.
                My favorite dessert is chocolate ice cream and my family loves to go to camping and fishing.
            </p>
            <Resume></Resume>
        </section>

        
    );
}

export default About;