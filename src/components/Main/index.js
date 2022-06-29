import React, { useEffect } from 'react';

function Main({ currentPage, setCurrentPage }) {
    useEffect(() => {
        document.title = 'Kelly Hyunkyoung Lee'
    });

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <section>
            <ul className=''>
                <li className='mx-1'>
                    <a 
                        href='#about'
                        onClick={() => handlePageChange('About')}
                        className={`title ${currentPage === 'About' && 'navActive'}`}>
                        About
                    </a>
                </li>
                <li className='mx-1'>
                    <a 
                        href='#portfolio'
                        onClick={() => handlePageChange('Portfolio')}
                        className={`title ${currentPage === 'Portfolio' && 'navActive'}`}>
                        Portfolio
                    </a>            
                </li>
            </ul>
            <div className='container'>
                <h3>Kelly Hyunkyoung Lee</h3>
                <p>Software Developer - MERN Stack</p>
            </div>
        </section>
    );
}


export default Main;