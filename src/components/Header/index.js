import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Portfolio from '../Portfolio';
import Main from '../Main';

function Header() {
    const [currentPage, setCurrentPage] = useState('Main');

    // check what the value of `currentPage` is and return the corresponding component to render. 
    const renderPage = () => {
      if (currentPage === 'Portfolio') {
        return <Portfolio></Portfolio>
      }
      if (currentPage === 'About') {
        return <About></About>
      } else {
        return <Main currentPage={currentPage} setCurrentPage={setCurrentPage}></Main>
      }
    }

    const renderNav = () => {
      if (currentPage === 'About' || currentPage === 'Portfolio') {
        return (
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange}></Navigation>
        )
      }
    }
  
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
      <main>
        {renderNav()}
        {renderPage()}
      </main>
    );
}

export default Header;