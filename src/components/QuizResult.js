import React from 'react';
import { Link } from 'react-router-dom';

const QuizResult = ({ results, resetValues }) => {
  return (
    <div id='quiz_result'>
      <div>
        <span>Seems like You are:</span>
      </div>
      <div className='result'>{results.result}</div>
      <div>
        <Link to='/'>
          <button type='button' className='homeBtn' onClick={resetValues}>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuizResult;
