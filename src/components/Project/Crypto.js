import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CryptoModal from '../Modal/CryptoModal';

function Crypto() {
    const [modalShow, setModalShow] = useState(false);   

    return (
        <div className='project'>
            <Button className='modal-btn' onClick={() => setModalShow(true)}>
                Crypto Checker 
            </Button>

            <CryptoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Crypto;