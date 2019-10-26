import React from 'react';
import { Link } from 'react-router-dom';

const QuizResult = (props) => {
    return (
        <div id='quiz_result'>
            <div><span>Seems like You are:</span></div>
            <div className='result'>{props.results.result}</div>
            <div>
                <Link to='/'>
                    <button className='homeBtn' onClick={props.resetValues}>Home</button>
                </Link>
            </div>
        </div>
    );
};

export default QuizResult;
