import React from 'react';

const Answers = (props) => {

    const onClick = (e) => {
        props.onClick(e, props.frontend, props.backend, props.question, props.label);
    }

    return (
        <div className='answers'>
            <input type='radio' name={props.name} onClick={onClick}/><span>{props.label}</span>
        </div>
    );
}

export default Answers;

