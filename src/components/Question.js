import React from 'react';
import Answers from './Answers';

const Question = (props) => {
    return (
        <div className='questionForm'>
            <div className='ID_name'>
                <span className='ID'>{props.id + 1}</span>
                <div className='name'>{props.question}</div>
            </div>
            {props.answers.map((answers, key) =>
                <Answers key={key} question={props.question} name={props.input_name} onClick={props.onClick} {...answers} />
            )}
        </div>
    );
}

export default Question;
