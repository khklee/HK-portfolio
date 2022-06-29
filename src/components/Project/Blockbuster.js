import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import BlockbusterModal from '../Modal/BlockbusterModal';

// import password from '../../assets/images/projects/password generator.png';
// import githubImg from '../../assets/images/Github-modal.png';

function Blockbuster() {
    const [modalShow, setModalShow] = useState(false);   

    return (
            <div className='project'>
                <Button className='modal-btn' onClick={() => setModalShow(true)}>
                    Blockbuster Video 
                </Button>

                <BlockbusterModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>           
            // <div className='project'>
            //     <Button className='modal-btn' onClick={() => setModalShow(true)}>
            //         Password-Generator
            //     </Button>

            //     <BlockbusterModal
            //         show={modalShow}
            //         onHide={() => setModalShow(false)}
            //     />
            // </div> 
    )
}

export default Blockbuster;