import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TechModal from '../Modal/TechModal';

function Tech() {
    const [modalShow, setModalShow] = useState(false);   

    return (
        <div className='project'>
            <Button className='modal-btn' onClick={() => setModalShow(true)}>
                Tech Journal
            </Button>

            <TechModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Tech;