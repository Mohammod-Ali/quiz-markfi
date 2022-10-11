import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {name, logo, } = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-cart'>
                <h5>{name}</h5>
                <button>Start Quiz</button>
            </div>
        </div>
    );
};

export default Quiz;