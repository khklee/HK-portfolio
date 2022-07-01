import React, { useState } from 'react';    
import crypto from '../../assets/images/projects/Crypto-Checker.png';

function CryptoModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
      setIsOpen(true);
    }
  
    const closeModal = () => {
      setIsOpen(false);
    }
  
    return (
      <div className='modal-container'>
        {isOpen && (
          <>
            <div className="overlay"></div>
            <div className="modal">
              <header className="modal-header">
                <h2 className='modal-title'>Crypto Checker</h2>
                <button onClick={closeModal} className="close-button">&times;</button>
              </header>
              <main className="modal-main">
                <img className='proj-img' src={crypto} alt="screentshot of Crypto-Checker"/>
                <p className='modal-text'>
                    Crypto Checker is a website for those interested in CryptoCurrency and various alternatives to central bank controlled fiat monies. 
                    It allows its user's to check the prices of crypto via search and also shows the user the top 8 most valuable crypto on the market at the given time.
                </p>
                <p className='modal-text'>
                    HTML/CSS/JavaScript/API          
                </p>
              </main>
              <footer className='modal-footer'>
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
              </footer>
            </div>
          </>
        )}
        <button className="modal-btn" onClick={openModal}>Crypto Checker</button>
      </div>
    );
};

export default CryptoModal;