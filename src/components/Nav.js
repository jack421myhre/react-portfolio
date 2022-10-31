import React from 'react';

import '../styles/Nav.css';

function Nav() {
    return (
        <div>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">JM</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">My Work</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Resume</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Contact Me</a>
                </li>
            </ul>
        </div>
    );
}

export default Nav; 