import React from 'react';
import { Modal } from 'react-bootstrap';
    
import candy from '../../assets/images/projects/candy inventory.png';

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
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className='proj-img' src={candy} alt="screentshot of Candy shop" />
                <p className='modal-text'>
                Candy Shop Inventory is an inventory management application. A user can sign up with their email and log in to manage the inventory. 
                It has a databse of price, quantity, and products of canides and a user can create, update and delete the data in the application.
                </p>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
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
            </Modal.Footer>
        </Modal>
    )
};

export default CandyModal;