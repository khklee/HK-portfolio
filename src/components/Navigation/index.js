import React from 'react';

function Navigation() {
    return (
        <ul className='flex-row'>
            <li className='mx-2'>
                <a href='#about'>About me</a>
            </li>
            <li className='mx-2'>
                <span>Portfolio</span>
            </li>
            <li className='mx-2'>
                <span>Contact</span>
            </li>
            <li className='mx-2'>
                <span>Resume</span>
            </li>
        </ul>
    )
}

export default Navigation;