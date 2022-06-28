import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className='flex-row'>
            <li className='mx-1'>
                <a 
                    href='/'
                    className={`title ${currentPage === 'Main' && 'navActive'}`}>
                    Home
                </a>
            </li>
            <li className='mx-1'>
                <a 
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className={`title ${currentPage === 'About' && 'navActive'}`}>
                    About Me
                </a>
            </li>
            <li className='mx-1'>
                <a 
                    href='#projects'
                    onClick={() => handlePageChange('Project')}
                    className={`title ${currentPage === 'Project' && 'navActive'}`}>
                    Portfolio
                </a>            
            </li>
            {/* <li className='mx-1'>
                <a 
                    href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={`mx-2 ${currentPage === 'Contact' && 'navActive'}`}>
                    Contact
                </a>              
            </li> */}
            {/* <li className='mx-1'>
                <a 
                    href='#skill'
                    onClick={() => handlePageChange('skill')}
                    className={`mx-2 ${currentPage === 'skill' && 'navActive'}`}>
                    skill
                </a>   
            </li> */}
        </ul>
    )
}

export default Navigation;