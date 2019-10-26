import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'reactparticles.js';

const Home = () => {
    return (
        <div id='home'>
            <Particles id='particles' config='particlesjs-config.json' />

            <h1>Quiz App</h1>
            <h4>Are you Frontend or Backend developer?</h4>
            <div className='btns'>
                <Link to='/quiz'><button className='startBtn'>Start</button></Link>
                <Link to='/results'><button className='resultsBtn'>Results</button></Link>
            </div>
        </div>
    );
};

export default Home;

