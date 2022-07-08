import React, { useState } from 'react';
import candy from '../../assets/images/projects/candy inventory.png';

function CandyModal() {
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
                  <h2 className='modal-title'>Candy Inventory</h2>
                </div>
                <div className='push'>
                  <a href="https://candy-shop-e-commerce.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <button className='link-btn-modal'>
                      Website
                      </button>
                  </a>
                </div>
                <div className='space'>
                  <a href="https://github.com/CMahoney12/Candy-Shop-Inventory" target="_blank" rel="noopener noreferrer">
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
                <img className='proj-img' src={candy} alt="screentshot of Candy shop" />
                <p className='modal-text'>
                Candy Shop Inventory is an inventory management application. A user can sign up with their email and log in to manage the inventory. 
                It has a databse of price, quantity, and products of canides and a user can create, update and delete the data in the application.
                </p>
                <p className='modal-text'>
                    HTML CSS JavaScript Handlebars Node.js Express.js MySQL Sequelize          
                </p>
              </main>
            </div>
          </>
        )}
        <p className="modal-btn hvr-skew-forward" onClick={openModal}>Candy Inventory</p>
      </div>
    );
};

export default CandyModal;