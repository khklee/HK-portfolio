import React from 'react';
import { Modal } from 'react-bootstrap';
    
import tech from '../../assets/images/projects/tech-journal.png';

function TechModal(props) {
    return (    
        <Modal       
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='modal-title' id="contained-modal-title-vcenter">
                    Tech Journal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className='proj-img' src={tech} alt="screenshot of tech-journal"/>
                <p className='modal-text'>
                    Tech-Journal is a CMS-style blog site, where developers can publish their blog posts and comment on other developers' posts as well. 
                    Users can publish articles, blog posts, and their thoughts and opinions by signing in. They can also update or delete their posts and leave a comment to posts as well.
                </p>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
                <a href="https://secure-forest-02686.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <button className='github-btn'>

                        Website
                    </button>
                </a>
                <a href="https://github.com/khklee/Tech-Journal" target="_blank" rel="noopener noreferrer">
                    <button className='github-btn'>
                        Github Repo
                    </button>               
                </a>
            </Modal.Footer>
        </Modal>
    )
};

export default TechModal;