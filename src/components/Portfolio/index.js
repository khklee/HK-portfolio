import React from 'react';

import BlockbusterModal from '../Modal/BlockbusterModal';
import TechModal from '../Modal/TechModal';
import CandyModal from '../Modal/CandyModal';
import CryptoModal from '../Modal/CryptoModal';
import WeatherModal from '../Modal/WeatherModal';
import TaskModal from '../Modal/TaskModal';

function Portfolio() {
    return (
        <section className='container' >
            <h2 className='title lineUp'>Portfolio</h2>
            <BlockbusterModal></BlockbusterModal>
            <TechModal></TechModal>
            <CandyModal></CandyModal>
            <CryptoModal></CryptoModal>
            <WeatherModal></WeatherModal>
            <TaskModal></TaskModal>
        </section>
    )

}

export default Portfolio;