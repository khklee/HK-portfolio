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
                        className={`nav-title ${currentPage === 'About' && 'navActive'}`}>
                        About
                    </a>
                </li>
                <li className='mx-1'>
                    <a 
                        href='#projects'
                        onClick={() => handlePageChange('Project')}
                        className={`nav-title ${currentPage === 'Project' && 'navActive'}`}>
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