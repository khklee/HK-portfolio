import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CandyModal from '../Modal/CandyModal';

function Candy() {
    const [modalShow, setModalShow] = useState(false);   

    return (
        <div className='project'>
            <Button className='modal-btn' onClick={() => setModalShow(true)}>
                Candy Inventory
            </Button>

            <CandyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Candy;