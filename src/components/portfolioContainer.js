import React, { useState } from 'react';
import NavLinks from './NavLinks';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    // TODO: Add a comment describing the functionality of this method
    // renders based on what the currentPage state is 
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Work') {
            return <Work />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='portfolio-container'>
            {/* // TODO: Add a comment describing what we are passing as props */}
            {/* currentPage value and function to change the page */}
            <NavLinks currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* // TODO: Add a comment explaining what is happening on the following line */}
            {/* calling the renderPage function select the currentPage */}
            {renderPage()}
        </div>
    );
}