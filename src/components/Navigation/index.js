import React, { useEffect } from 'react';

function Navigation({ currentPage, handlePageChange }) {

    useEffect(() => {
        document.title = 'My Portfolio'
    });

    return (
        <ul className='flex-row'>
            <li className='mx-1'>
                <a 
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className={`mx-2 ${currentPage === 'About' && 'navActive'}`}>
                    About Me
                </a>
            </li>
            <li className='mx-1'>
                <a 
                    href='#projects'
                    onClick={() => handlePageChange('Project')}
                    className={`mx-2 ${currentPage === 'Project' && 'navActive'}`}>
                    Portfolio
                </a>            
            </li>
            <li className='mx-1'>
                <a 
                    href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={`mx-2 ${currentPage === 'Contact' && 'navActive'}`}>
                    Contact
                </a>              
            </li>
            <li className='mx-1'>
                <a 
                    href='#resume'
                    onClick={() => handlePageChange('Resume')}
                    className={`mx-2 ${currentPage === 'Resume' && 'navActive'}`}>
                    Resume
                </a>   
            </li>
        </ul>
    )
}

export default Navigation;