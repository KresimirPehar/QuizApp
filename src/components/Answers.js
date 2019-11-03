import React from 'react';

const Answers = ({ onClick, frontend, backend, question, label, name }) => {

    const onAnswerClick = (e) => {
        onClick(e, frontend, backend, question, label);
    };

    return (
        <div className='answers'>
            <input type='radio' name={name} onClick={onAnswerClick} /><span>{label}</span>
        </div>
    );
};

export default Answers;

