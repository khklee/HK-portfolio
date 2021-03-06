import React, { useState } from 'react';        
import tech from '../../assets/images/projects/tech-journal.png';

function TechModal(props) {
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
                  <h2 className='modal-title'>Tech Journal</h2>
                </div>
                <div className='push'>
                  <a href="https://secure-forest-02686.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <button className='link-btn-modal'>

                          Website
                      </button>
                  </a>
                </div>
                <div className='space'>
                  <a href="https://github.com/khklee/Tech-Journal" target="_blank" rel="noopener noreferrer">
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
                <img className='proj-img' src={tech} alt="screenshot of tech-journal"/>
                <p className='modal-text'>
                    Tech-Journal is a CMS-style blog site, where developers can publish their blog posts and comment on other developers' posts as well. 
                    Users can publish articles, blog posts, and their thoughts and opinions by signing in. They can also update or delete their posts and leave a comment to posts as well.
                </p>
                <p className='modal-text'>
                    HTML JavaScript CSS Handlebars Node.js Express.js MySQL Sequelize          
                </p>
              </main>
            </div>
          </>
        )}
        <p className="modal-btn hvr-skew-forward" onClick={openModal}>Tech Journal</p>
      </div>
    );
};

export default TechModal;