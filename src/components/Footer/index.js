import React from 'react';
import githubImg from '../../assets/images/Github.png';
import linkedinImg from '../../assets/images/Linkedin.png';
import stackImg from '../../assets/images/Stack-overflow.png';
import Contact from '../Contact';

function Footer() {
    return(
        <footer>
            <div className='footer-container'>
                <div>
                    <h2 className='sec-title' id='contact'>Contact me</h2>
                    <h4><a href="mailto:khklee0705@gmail.com" className='email'> Email: khklee0705@gmail.com </a></h4>
                    <div className='links-container'>
                        <div className='contact'>
                            <a href="https://github.com/khklee" target="_blank" rel="noopener noreferrer"><img className='footer-img' src={githubImg} alt='github'/></a>
                        </div>
                        <div className='contact'>
                            <a href="https://www.linkedin.com/in/khklee" target="_blank" rel="noopener noreferrer"><img className='footer-img' src={linkedinImg} alt='linkedin'/></a>
                        </div>
                        <div className='contact'>
                            <a href="https://stackoverflow.com/users/17424847/hyunkyoung-lee" target="_blank" rel="noopener noreferrer"><img className='footer-img-stack' src={stackImg} alt='stack-overflow'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;