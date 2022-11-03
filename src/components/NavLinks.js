import React from 'react';
import '../styles/Nav.css';

function NavLinks({ currentPage, handlePageChange }) {
    return (
        <div className='nav-container'>
            <div>
                <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    <p className='nav-name'>JM</p>
                </a>
            </div>
            <ul className="nav">
                <li className="nav-item">
                    <a
                        href="#work"
                        onClick={() => handlePageChange('Work')}
                        className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                    >
                        My Work
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact Me
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavLinks;