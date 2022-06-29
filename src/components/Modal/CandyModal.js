import React from 'react';
import { Modal } from 'react-bootstrap';
    
import candy from '../../assets/images/projects/candy inventory.png';
import githubImg from '../../assets/images/Github-modal.png';

function CandyModal(props) {
    return (    
        <Modal       
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='modal-title' id="contained-modal-title-vcenter">
                    Candy Inventory
                    <a href="https://github.com/CMahoney12/Candy-Shop-Inventory" target="_blank" rel="noopener noreferrer">
                      &nbsp;<img className='git-img' src={githubImg} alt='github'/>
                    </a>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <a href="https://candy-shop-e-commerce.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img className='proj-img' src={candy} alt="screentshot of Candy shop" />
                </a>
                <p className='modal-text'>
                Candy Shop Inventory is an inventory management application. A user can sign up with their email and log in to manage the inventory. 
                It has a databse of price, quantity, and products of canides and a user can create, update and delete the data in the application.
                </p>
            </Modal.Body>
        </Modal>
    )
};

export default CandyModal;