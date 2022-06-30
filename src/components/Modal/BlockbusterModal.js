import React from 'react';
import { Modal } from 'react-bootstrap';

import blockbuster from '../../assets/images/projects/Blockbuster Video.png'


function BlockbusterModal(props) {

    return (    
        <Modal       
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='modal-title' id="contained-modal-title-vcenter">
                    Blockbuster Video
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className='proj-img' src={blockbuster} alt="screenshot of blockbuster video"/>
                <p className='modal-text'>
                E-commerce website for Blockbuster Video which customers can purchase movies.
                I tried to make an engaging and functional website for customers to create, edit and delete comments on the movies in the website.
                </p>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
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
            </Modal.Footer>
        </Modal>
    )
};

export default BlockbusterModal;