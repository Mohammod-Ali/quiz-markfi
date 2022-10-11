import React from 'react';
import Options from '../Options/Options';
import './QuizDetail.css'

const QuizDetail = ({quiz}) => {
    const {question, options, } = quiz;
    // console.log(quiz)
    return (
        <div className='quiz-details'>
            <h3>Quiz{}:  {question}</h3>
            {
                options.map(option => <Options
                key={option.id}
                option={option}
                ></Options>)
            }
        </div>
    );
};

export default QuizDetail;