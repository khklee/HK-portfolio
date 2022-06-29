import React from 'react';
import { Modal } from 'react-bootstrap';
    
import crypto from '../../assets/images/projects/Crypto-Checker.png';
import githubImg from '../../assets/images/Github-modal.png';

function CryptoModal(props) {
    return (    
        <Modal       
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='modal-title' id="contained-modal-title-vcenter">
                    Crypto Checker    
                    <a href="https://github.com/BullMooseDev/Crypto-Checker" target="_blank" rel="noopener noreferrer">
                      &nbsp;<img className='git-img' src={githubImg} alt='github'/>
                    </a>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <a href="https://bullmoosedev.github.io/Crypto-Checker/" target="_blank" rel="noopener noreferrer">
                    <img className='proj-img' src={crypto} alt="screentshot of Crypto-Checker"/>
                </a>
                <p className='modal-text'>
                    Crypto-Checker is a website for those interested in CryptoCurrency and various alternatives to central bank controlled fiat monies. 
                    It allows its user's to check the prices of crypto via search and also shows the user the top 8 most valuable crypto on the market at the given time.
                </p>
            </Modal.Body>
        </Modal>
    )
};

export default CryptoModal;