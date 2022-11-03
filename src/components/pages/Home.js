import React from 'react';
import '../../styles/Home.css';

import headshot from '../../images/professionalHeadshot.jpg';


function Home() {
    return (
        <div className='home-container'>
            <div className='d-flex flex-row justify-content-around align-items-center hero'>
                <div className='hero-title '>
                    <h1 className='focus-in-expand'> I'm Jackson</h1>
                    <h2 className='focus-in-expand-delay'>Web Developer & Designer</h2>
                </div>
            </div>

            <div className='d-md-flex flex-row justify-content-around align-items-md-center about-container'>
                <div className='headshot-container'>
                    <img className='headshot tilt-in-fwd-tr' src={headshot} alt='Professional headshot of Jackson Myhre' />
                </div>
                <div className='about-text text-focus-in'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>




        </div>
    );
}


export default Home;