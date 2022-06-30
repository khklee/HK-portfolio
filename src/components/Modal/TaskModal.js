import React from 'react';
import { Modal } from 'react-bootstrap';
    
import task from '../../assets/images/projects/Taskmaster Pro.png';

function TaskModal(props) {
    return (    
        <Modal       
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='modal-title' id="contained-modal-title-vcenter">
                    Taskmaster  
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className='proj-img' src={task} alt="screentshot of Taskmaster"/>
                <p className='modal-text'>
                    Taskmaster is a task managing application that allows a user to save and arrange tasks to do. 
                    When a user adds task, he/she can arrange it in four different sections, 'to do', 'in progress', 'in review', or 'done' by dragging a task. 
                    If a task is due in 3 days or past, it will be highlighted in colors. Tasks can be deleted by dragging to the bottom or clicking 'Delete All Tasks' buttons. 
                    Date on tasks can be also edtied by clicking it.
                </p>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
                <a href="https://khklee.github.io/taskmaster-pro/" target="_blank" rel="noopener noreferrer">
                    <button className='github-btn'>

                        Website
                    </button>
                </a>
                <a href="https://github.com/khklee/taskmaster-pro" target="_blank" rel="noopener noreferrer">
                    <button className='github-btn'>
                        Github Repo
                    </button>               
                </a>
            </Modal.Footer>
        </Modal>
    )
};

export default TaskModal;