import React from 'react';
import { Modal } from 'react-bootstrap';
    
import crypto from '../../assets/images/projects/Crypto-Checker.png';

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
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className='proj-img' src={crypto} alt="screentshot of Crypto-Checker"/>
                <p className='modal-text'>
                    Crypto-Checker is a website for those interested in CryptoCurrency and various alternatives to central bank controlled fiat monies. 
                    It allows its user's to check the prices of crypto via search and also shows the user the top 8 most valuable crypto on the market at the given time.
                </p>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
                <a href="https://bullmoosedev.github.io/Crypto-Checker/" target="_blank" rel="noopener noreferrer">
                    <button className='github-btn'>
                        Website
                    </button>
                </a>
                    <a href="https://github.com/BullMooseDev/Crypto-Checker" target="_blank" rel="noopener noreferrer">
                    <button className='github-btn'>
                        Github Repo
                    </button>               
                </a>
            </Modal.Footer>
        </Modal>
    )
};

export default CryptoModal;