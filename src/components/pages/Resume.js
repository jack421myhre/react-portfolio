import React from 'react';

import '../../styles/Resume.css';
import resume from '../links/Resume-Jackson-Myhre.pdf';

function Resume() {
    return (
        <div className='d-flex flex-column align-items-center resume-container'>
            <div className='resume-title'>
                <h1>Resume</h1>
            </div>

            <div className='d-flex flex-row align-items-top'>
                <div className='front-end resume-skills'>
                    <div>
                        <h3>Front-End Proficiencies</h3>
                    </div>

                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Responsive Design</li>
                        <li>Wireframing</li>
                    </ul>

                </div>

                <div className='back-end resume-skills'>
                    <div>
                        <h3>Back-End Proficiencies</h3>
                    </div>

                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB/Mongoose</li>
                        <li>SQL</li>
                        <li>RESTful APIs</li>
                    </ul>
                </div>
            </div>
            <div>
                <p><a className='resume-link' href={resume} target="_blank" rel="noreferrer">Download my resume</a></p>
            </div>
        </div>
    );
}


export default Resume;