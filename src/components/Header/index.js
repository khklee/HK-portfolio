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
      if (currentPage === 'Main') {
        return (
          <nav>
            <ul className='flex-row'>
              <li className='mx-1'>
                  <a 
                      href='/'
                      // onClick={() => handlePageChange('About')}
                      className={`title ${currentPage === 'Main' && 'navActive'}`}>
                      Home
                  </a>
              </li>
            </ul>
          </nav>
        )
      } else {
        return (
          <nav>
              <Navigation currentPage={currentPage} handlePageChange={handlePageChange}></Navigation>
          </nav>
        )
      }
    }
  
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div >
          <header className='flex-row px-1'>
            {renderNav()}
          </header>
          <main>
            {renderPage()}
          </main>
        </div>
    );
}

export default Header;