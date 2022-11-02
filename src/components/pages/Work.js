import React from 'react';
import '../../styles/Work.css';
import Project from '../Project';

// images
import teamSpeakSnap from '../../images/teamSpeakSnap.png';
import commitClockSnap from '../../images/commitClockSnap.png';
import brewViewSnap from '../../images/brewViewSnap.png';
import textEditorSnap from '../../images/textEditorSnap.png';

function Work() {
    return (
        <div className='d-flex flex-column work-container'>
            <div className='d-flex flex-row justify-content-center'>
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
            </div>
            <div className='d-flex flex-row justify-content-center'>
                <Project
                    name='BrewView'
                    image={brewViewSnap}
                    alt='Screenshot of the BrewView website home page'
                    github='https://github.com/jack421myhre/brew-view'
                    liveLink='https://jack421myhre.github.io/brew-view/'
                />
                <Project
                    name='Downloadable Text Editor (PWA)'
                    image={textEditorSnap}
                    alt=''
                    github='https://github.com/jack421myhre/text-editor-pwa'
                    liveLink='https://cryptic-island-17151.herokuapp.com/'
                />
            </div>
            <div className='d-flex flex-row justify-content-center'>
                <Project />
                <Project />
            </div>
        </div>
    );
}


export default Work;