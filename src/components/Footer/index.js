import React from 'react';
import githubImg from '../../assets/images/Github.png';
import linkedinImg from '../../assets/images/Linkedin.png';
import stackImg from '../../assets/images/Stack-overflow.png';

function Footer() {
    return(
        <footer>
            <div className='footer-container'>
                <div className='contact'>
                    <a href="https://github.com/khklee" target="_blank" rel="noopener noreferrer"><img className='footer-img' src={githubImg} alt='github'/></a>
                </div>
                <div className='contact'>
                    <a href="https://www.linkedin.com/in/khklee" target="_blank" rel="noopener noreferrer"><img className='footer-img' src={linkedinImg} alt='linkedin'/></a>
                </div>
                <div className='contact'>
                    <a href="https://stackoverflow.com/users/17424847/hyunkyoung-lee" target="_blank" rel="noopener noreferrer"><img className='footer-img' src={stackImg} alt='stack-overflow'/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;