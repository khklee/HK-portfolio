import React from 'react';
import { Modal } from 'react-bootstrap';
    
import weather from '../../assets/images/projects/weather dashboard.png';
import githubImg from '../../assets/images/Github-modal.png';

function WeatherModal(props) {
    return (    
        <Modal       
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='modal-title' id="contained-modal-title-vcenter">
                    Weather Dashboard    
                    <a href="https://github.com/khklee/Weather-Dashboard" target="_blank" rel="noopener noreferrer">
                      &nbsp;<img className='git-img' src={githubImg} alt='github'/>
                    </a>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <a href="https://khklee.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
                    <img className='proj-img' src={weather} alt="screentshot of Weather-Dashboard"/>
                </a>
                <p className='modal-text'>
                    Wether Dashboard allows a user to search for a city and presents with current and future conditions for the city.
                </p>
                <p className='modal-text'>
                    Current weather conditions includes icon representation of weather coniditions, the temperature, the humidity, the wind speed, and the UV index. 
                </p>
                <p className='modal-text'>
                    The UV index presents with a color that indicate whether the conditions are favorable, modertae, or severe as green, yellow, and red. Future weather conditions for the city searched displays the icon, the temperature, teh wind speed and the humidity. 
                </p>
                <p className='modal-text'>
                    When a user clicks a city in the search history, it presents with current and future conditions for that city again.
                </p>
            </Modal.Body>
        </Modal>
    )
};

export default WeatherModal;