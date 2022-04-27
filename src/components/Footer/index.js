import React from 'react';
import githubImg from '../../assets/images/Github.png';
import linkedinImg from '../../assets/images/Linkedin.png';
import stackImg from '../../assets/images/Stack-overflow.png';

function Footer() {
    return(
        <section>
            <a href="https://github.com/khklee" target="_blank" rel="noopener noreferrer"><img src={githubImg} alt='github'/></a>
            <a href="https://www.linkedin.com/in/khklee" target="_blank" rel="noopener noreferrer"><img src={linkedinImg} alt='linkedin'/></a>
            <a href="https://stackoverflow.com/users/17424847/hyunkyoung-lee" target="_blank" rel="noopener noreferrer"><img src={stackImg} alt='stack-overflow'/></a>
        </section>
    )
}

export default Footer;