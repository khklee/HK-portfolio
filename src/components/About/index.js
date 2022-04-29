import React from 'react';
import avatarImg from '../../assets/images/Avatar.png';

function About() {
    return (
        <section className='my-5 container'>
            <h2 className='sec-title' id='about'>About Me</h2>
            <img src={avatarImg} className='my-2' alt='avatar'/>
            <p>
                Hi, my name is Hyunkyoung Lee. I graduated in psychology for my bachelor degree, but after I got married with an enthusiastic back-end engineer, I became to be interested in coding. 
                I've been really loving coding and developing websites because it is a creative art of creating different forms of expression by utilizing computer languages. 
                I'm sharpening my coding skills for HTML, CSS, JavaScript, React, Node.js, MySQL, and NoSQL.
                Little more personal information about me beside coding, I'm a mom of two adorable girls running all over the place. My favorite dessert is chocolate ice cream and my family loves to go to camping and fishing.
            </p>
        </section>
    );
}

export default About;