import React, { useState } from 'react';
import NavLinks from './NavLinks';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    // TODO: Add a comment describing the functionality of this method
    // renders based on what the currentPage state is 
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
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
        <div className='d-flex flex-column justify-content-between portfolio-container'>

            <NavLinks currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}