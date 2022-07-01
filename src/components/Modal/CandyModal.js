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
                <h2 className='modal-title'>Candy Inventory</h2>
                <button onClick={closeModal} className="close-button">&times;</button>
              </header>
              <main className="modal-main">
                <img className='proj-img' src={candy} alt="screentshot of Candy shop" />
                <p className='modal-text'>
                Candy Shop Inventory is an inventory management application. A user can sign up with their email and log in to manage the inventory. 
                It has a databse of price, quantity, and products of canides and a user can create, update and delete the data in the application.
                </p>
                <p className='modal-text'>
                    HTML/CSS/JavaScript/Handlebars/Node.js/Express.js/MySQL/Sequelize          
                </p>
              </main>
              <footer className='modal-footer'>
                <a href="https://candy-shop-e-commerce.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <button className='github-btn'>
                    Website
                    </button>
                </a>
                <a href="https://github.com/CMahoney12/Candy-Shop-Inventory" target="_blank" rel="noopener noreferrer">
                    <button className='github-btn'>
                    Github Repo
                    </button>               
                </a>
              </footer>
            </div>
          </>
        )}
        <button className="modal-btn" onClick={openModal}>Candy Inventory</button>
      </div>
    );
};

export default CandyModal;