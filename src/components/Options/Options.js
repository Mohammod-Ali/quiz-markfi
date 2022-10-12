import React from 'react';
import './Options.css'

const Options = ({option, quizHandler, correctAnswer}) => {
    // console.log(option)
    return (
        <div className='option'>
            <button className={option === correctAnswer ? `green`: `red`} onClick={() => quizHandler(option)}>{option}</button>
        </div>
    );
};

export default Options;