import React from 'react';
import Answers from './Answers';

const Question = ({ id, question, answers, inputName, onClick }) => {
    return (
        <div className='questionForm'>
            <div className='ID_name'>
                <span className='ID'>{id + 1}</span>
                <div className='name'>{question}</div>
            </div>
            {answers.map((answer, key) =>
                <Answers key={key.toString()} question={question} name={inputName} onClick={onClick} {...answer} />
            )}
        </div>
    );
};

export default Question;
