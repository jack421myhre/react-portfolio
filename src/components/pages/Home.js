import React from 'react';
import '../../styles/Home.css';


function Home() {
    return (
        <div className='home-container'>
            <div className='d-flex flex-row justify-content-around align-items-center hero'>
                <div className='hero-title '>
                    <h1 className='focus-in-expand'> I'm Jackson</h1>
                    <h2 className='focus-in-expand-delay'>Web Developer & Designer</h2>
                </div>
            </div>

            <div className='d-flex flex-row justify-content-around icon-section'>

                <div className='d-flex flex-column align-items-center icon-container slide-in-blurred-left-about'>
                    <a href='#' className='icon '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                    </a>
                    <p>About me</p>
                </div>

                <div className='d-flex flex-column align-items-center icon-container slide-in-blurred-left-work'>
                    <a href='#' className='icon '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg>
                    </a>
                    <p>My Work</p>
                </div>

                <div className='d-flex flex-column align-items-center icon-container slide-in-blurred-left-resume'>
                    <a href='#' className='icon '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                        </svg>
                    </a>
                    <p>Resume</p>
                </div>
                <div className='d-flex flex-column align-items-center icon-container slide-in-blurred-left-contact'>
                    <a href='#' className='icon '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg>
                    </a>
                    <p>Get in touch</p>
                </div>
            </div>
        </div>
    );
}


export default Home;