import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Project from '../Project';
import Resume from '../Resume';
import Contact from '../Contact';


function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    // check what the value of `currentPage` is and return the corresponding component to render. 
    const renderPage = () => {
      if (currentPage === 'Project') {
        return <Project></Project>
      }
      if (currentPage === 'Contact') {
        return <Contact></Contact>
      }
      if (currentPage === 'Resume') {
        return <Resume></Resume>
      } else {
        return <About></About>
      }
    }
  
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <header className='flex-row px-1'>
            <h2><a href='/'>Hyunkyoung Kelly Lee</a></h2>
            <nav>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}></Navigation>
            </nav>
            <main>
                {renderPage()}
            </main>
        </header>
    );
}

export default Header;