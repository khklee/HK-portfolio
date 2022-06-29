import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import WeatherModal from '../Modal/WeatherModal';

function Weather() {
    const [modalShow, setModalShow] = useState(false);   

    return (
        <div className='project'>
            <Button className='modal-btn' onClick={() => setModalShow(true)}>
                Weather Dashboard  
            </Button>

            <WeatherModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Weather;