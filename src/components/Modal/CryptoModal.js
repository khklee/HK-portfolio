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
                <div>
                  <h2 className='modal-title'>Crypto Checker</h2>
                </div>
                <div className='push'>
                  <a href="https://bullmoosedev.github.io/Crypto-Checker/" target="_blank" rel="noopener noreferrer">
                      <button className='link-btn-modal'>
                          Website
                      </button>
                  </a>
                </div>
                <div className='space'>
                  <a href="https://github.com/BullMooseDev/Crypto-Checker" target="_blank" rel="noopener noreferrer">
                      <button className='link-btn-modal'>
                          Github Repo
                      </button>               
                  </a>
                </div>
                <div>
                  <button onClick={closeModal} className="close-button">&times;</button>
                </div>
              </header>
              <main className="modal-main">
                <img className='proj-img' src={crypto} alt="screentshot of Crypto-Checker"/>
                <p className='modal-text'>
                    Crypto Checker is a website for those interested in CryptoCurrency and various alternatives to central bank controlled fiat monies. 
                    It allows its user's to check the prices of crypto via search and also shows the user the top 8 most valuable crypto on the market at the given time.
                </p>
                <p className='modal-text'>
                    HTML CSS JavaScript API          
                </p>
              </main>
            </div>
          </>
        )}
        <p className="modal-btn hvr-skew-forward" onClick={openModal}>Crypto Checker</p>
      </div>
    );
};

export default CryptoModal;