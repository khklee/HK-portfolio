import React, { useState } from 'react';
import task from '../../assets/images/projects/Taskmaster Pro.png';

function TaskModal(props) {
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
                <h2 className='modal-title'>Taskmaster</h2>
                <button onClick={closeModal} className="close-button">&times;</button>
              </header>
              <main className="modal-main">
                <img className='proj-img' src={task} alt="screentshot of Taskmaster"/>
                <p className='modal-text'>
                Taskmaster is a task managing application that allows a user to save and arrange tasks to do. 
                Tasks can be deleted and edtied.
                </p>
                <p className='modal-text'>
                    HTML/CSS/JavaScript          
                </p>
              </main>
              <footer className='modal-footer'>
                <a href="https://khklee.github.io/taskmaster-pro/" target="_blank" rel="noopener noreferrer">
                    <button className='link-btn-modal'>
                        Website
                    </button>
                </a>
                <a href="https://github.com/khklee/taskmaster-pro" target="_blank" rel="noopener noreferrer">
                    <button className='link-btn-modal'>
                        Github Repo
                    </button>               
                </a>
              </footer>
            </div>
          </>
        )}
        <button className="modal-btn hvr-skew-forward" onClick={openModal}>Taskmaster</button>
      </div>
    );
};

export default TaskModal;