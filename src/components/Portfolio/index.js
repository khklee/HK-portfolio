import React from 'react';

import Blockbuster from '../Project/Blockbuster';
import Tech from '../Project/Tech';
import Candy from '../Project/Candy';
import Crypto from '../Project/Crypto';
import Weather from '../Project/Weather';
import Task from '../Project/Task';

function Portfolio() {
    return (
        <section className='container'>
            <h2 className='title' id='projects'>Portfolio</h2>
            <Blockbuster></Blockbuster>
            <Tech></Tech>
            <Candy></Candy>
            <Crypto></Crypto>
            <Weather></Weather>
            <Task></Task>
        </section>
    )

}

export default Portfolio;