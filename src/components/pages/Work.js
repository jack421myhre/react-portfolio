import React from 'react';
import '../../styles/Work.css';
import Project from '../Project';

// images
import teamSpeakSnap from '../../images/teamSpeakSnap.png';
import commitClockSnap from '../../images/commitClockSnap.png';
import brewViewSnap from '../../images/brewViewSnap.png';
import textEditorSnap from '../../images/textEditorSnap.png';
import noteTakerSnap from '../../images/noteTakerSnap.png';
import pGenSnap from '../../images/pGenSnap.png';

function Work() {
    return (
        <div>
            <div className='d-flex flex-row justify-content-center work-title'>
                <h1>My Work</h1>
            </div>
            <div className='d-md-flex flex-lg-row flex-md-column justify-content-lg-center align-items-md-center work-container'>
                <div className=''>
                    <Project
                        name='TeamSpeak'
                        image={teamSpeakSnap}
                        alt='Screenshot of the TeamSpeak website home page'
                        github='https://github.com/park-d/team-speak'
                        liveLink='https://teamspeak-org.herokuapp.com/'
                    />
                    <Project
                        name='Git Commit Clock'
                        image={commitClockSnap}
                        alt=''
                        github='https://github.com/jack421myhre/commit-clock'
                        liveLink='https://jack421myhre.github.io/commit-clock/'
                    />
                    <Project
                        name='BrewView'
                        image={brewViewSnap}
                        alt='Screenshot of the BrewView website home page'
                        github='https://github.com/jack421myhre/brew-view'
                        liveLink='https://jack421myhre.github.io/brew-view/'
                    />
                </div>

                <div className=''>
                    <Project
                        name='Text Editor (PWA)'
                        image={textEditorSnap}
                        alt=''
                        github='https://github.com/jack421myhre/text-editor-pwa'
                        liveLink='https://cryptic-island-17151.herokuapp.com/'
                    />
                    <Project
                        name='Note Taker'
                        image={noteTakerSnap}
                        alt='Screenshot of the Express.js Note Taker Application'
                        github='https://github.com/jack421myhre/11-express-note-taker'
                        liveLink='https://pacific-river-52000.herokuapp.com/'
                    />
                    <Project
                        name='Password Generator'
                        image={pGenSnap}
                        alt='Screenshot of the Password Generator Application'
                        github='https://github.com/jack421myhre/03-password-generator'
                        liveLink='https://jack421myhre.github.io/03-password-generator/'
                    />
                </div>
            </div>
        </div>
    );
}


export default Work;