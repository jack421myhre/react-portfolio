import React from 'react';
import '../../styles/Home.css';

import headshot from '../../images/professionalHeadshot.jpg';


function Home() {
    return (
        <div className='home-container'>
            <div className='hero'>
                <div className='hero-title '>
                    <h1 className='focus-in-expand'> I'm Jackson</h1>
                    <h2 className='focus-in-expand-delay'>Web Developer & Designer</h2>
                </div>
            </div>

            <div className='d-flex flex-column align-items-center about-container'>

                <img className='headshot tilt-in-fwd-tr' src={headshot} alt='Professional headshot of Jackson Myhre' />

                <p className='about-text text-focus-in'>I'm Jackson Myhre, a Chicago based Developer specializing in front-end development. Currently, I'm wrapping up the Northwestern University Full Stack Coding Bootcamp and looking to expand my knowledge of both front end and back end technologies.</p>
                <p className='about-text text-focus-in'>Outside of development, I am a photographer and avid movie lover, rock climber, and boulderer.</p>

            </div>




        </div>
    );
}


export default Home;