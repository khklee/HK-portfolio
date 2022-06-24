import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Project from '../Project';
import Main from '../Main';
// import Resume from '../Resume';
// import Contact from '../Contact';


function Header() {
    const [currentPage, setCurrentPage] = useState('Main');

    // check what the value of `currentPage` is and return the corresponding component to render. 
    const renderPage = () => {
      if (currentPage === 'Project') {
        return <Project></Project>
      }
      if (currentPage === 'About') {
        return <About></About>
      } else {
        return <Main currentPage={currentPage} setCurrentPage={setCurrentPage}></Main>
      }
    }
  
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div >
          <header className='flex-row px-1'>
            <h2 className='title'><a href='/'>Home</a></h2>
            {/* <nav>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}></Navigation>
            </nav> */}
          </header>
          <main>
              {renderPage()}
          </main>
        </div>
    );
}

export default Header;