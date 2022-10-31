import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
// CSS
import './styles/App.css';


function App() {
    return (
        <div className='app'>
            <Nav />
            <Hero />
        </div>

    );
}



export default App; 