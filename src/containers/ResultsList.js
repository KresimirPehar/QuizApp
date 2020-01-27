import React, { useState, useEffect } from 'react';

const ResultsList = ({ userSelections, name, date, result }) => {
  const [showAnswersOnClick, setShowAnswersOnClick] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (showAnswersOnClick && answers.length === 0) {
      const getAnswers = userSelections;
      const array = [];
      Object.keys(getAnswers).forEach(key => {
        array.push(`${key} ${getAnswers[key]}`);
      });
      setAnswers(array);
    }
  }, [answers.length, showAnswersOnClick, userSelections]);

  const onResultClick = () => {
    setShowAnswersOnClick(showAnswersOnClick => !showAnswersOnClick);
  };

  return (
    <div
      role='button'
      tabIndex={0}
      onKeyPress={onResultClick}
      className='resultsList'
      onClick={onResultClick}
    >
      <div className='userData'>
        <div className='userName'>{name}</div>
        <div className='userDate'>{date}</div>
        <div className='userResult'>{result}</div>
      </div>
      {showAnswersOnClick && (
        <>
          {answers.map((elem, key) => (
            <div className='answers' key={key.toString()}>
              {elem}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ResultsList;
