import React from 'react';
import './Options.css'

const Options = ({option, quizHandler}) => {
    // console.log(option)
    return (
        <div className='option'>
            <button onClick={() => quizHandler(option)}>{option}</button>
        </div>
    );
};

export default Options;