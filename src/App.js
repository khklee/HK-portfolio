import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <About></About>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
