import React, { useState } from 'react';
import blockbuster from '../../assets/images/projects/Blockbuster Video.png'


function BlockbusterModal() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
      setIsOpen(true);
    }
  
    const closeModal = () => {
      setIsOpen(false);
    }
  
    return (
      <div>
        {isOpen && (
          <>
            <div className="overlay"></div>
            <div className="modal">
              <header className="modal-header">
                <h2 className='modal-title'>Blockbuster Video</h2>
                <button onClick={closeModal} className="close-button">&times;</button>
              </header>
              <main className="modal-main">
                <img className='proj-img' src={blockbuster} alt="screenshot of blockbuster video"/>
                <p className='modal-text'>
                    E-commerce website for Blockbuster Video which customers can purchase movies.
                    I tried to make an engaging and functional website for customers to create, edit and delete comments on the movies in the website.
                </p>
                <p className='modal-text'>
                    React.js/Javascript/HTML/CSS/
                    Node.js/Express.js/NoSQL/MongoDB/GraphQl/JWT
                </p>
              </main>
              <footer className='modal-footer'>
                <a href="https://tranquil-caverns-31701.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <button className='github-btn'>
                         Website
                    </button>
                </a>
                <a href="https://github.com/JohnKnee3/Blockbuster-Video" target="_blank" rel="noopener noreferrer">
                     <button className='github-btn'>
                         Github Repo
                    </button>               
                </a>
              </footer>
            </div>
          </>
        )}
        <button className="modal-btn" onClick={openModal}>Blockbuster Video</button>
      </div>
    );
};

export default BlockbusterModal;