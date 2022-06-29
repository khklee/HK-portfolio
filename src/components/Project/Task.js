import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TaskModal from '../Modal/TaskModal';

function Task() {
    const [modalShow, setModalShow] = useState(false);   

    return (
        <div className='project'>
            <Button className='modal-btn' onClick={() => setModalShow(true)}>
                Taskmaster  
            </Button>

            <TaskModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Task;