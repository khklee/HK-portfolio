import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav className='sidenav'>
            <ul className='flex-row'>
                <li>
                    <a
                        href='/'
                        className={`nav-title ${currentPage === 'Main' && 'navActive'}`}>
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        href='#about'
                        onClick={() => handlePageChange('About')}
                        className={`nav-title ${currentPage === 'About' && 'navActive'}`}>
                        About
                    </a>
                </li>
                <li>
                    <a 
                        href='#portfolio'
                        onClick={() => handlePageChange('Portfolio')}
                        className={`nav-title ${currentPage === 'Portfolio' && 'navActive'}`}>
                        Portfolio
                    </a>            
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;