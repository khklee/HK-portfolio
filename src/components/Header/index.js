import React from 'react';
import Navigation from '../Navigation';

function Header() {
    return (
        <header className='flex-row px-1'>
            <h2>Hyunkyoung Kelly Lee</h2>
            <nav>
                <Navigation></Navigation>
            </nav>
        </header>
    );
}

export default Header;