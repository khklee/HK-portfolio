import React, { useState } from 'react';            
import weather from '../../assets/images/projects/weather dashboard.png';

function WeatherModal(props) {
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
                  <h2 className='modal-title'>Weather Dashboard</h2>
                </div>
                <div className='push'>
                  <a href="https://khklee.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
                      <button className='link-btn-modal'>
                          Website
                      </button>
                  </a>
                </div>
                <div className='space'>
                  <a href="https://github.com/khklee/Weather-Dashboard" target="_blank" rel="noopener noreferrer">
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
                <img className='proj-img' src={weather} alt="screentshot of Weather-Dashboard"/>
                <p className='modal-text'>
                    Wether Dashboard allows a user to search for a city and presents with current and future conditions for the city.
                    Current weather conditions includes icon representation of weather coniditions, the temperature, the humidity, the wind speed, and the UV index. 
                    It also provides history of weather searh results in the past.
                </p>
                <p className='modal-text'>
                    HTML/JavaScript/CSS/API         
                </p>
              </main>
            </div>
          </>
        )}
        <button className="modal-btn hvr-skew-forward" onClick={openModal}>Weather Dashboard</button>
      </div>
    );
};

export default WeatherModal;