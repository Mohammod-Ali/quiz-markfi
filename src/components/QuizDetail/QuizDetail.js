import React from 'react';
import Options from '../Options/Options';

const QuizDetail = ({quiz}) => {
    const {question, options} = quiz;
    console.log(quiz)
    return (
        <div>
            <h3>Quiz{}: {question}</h3>
            <p>{options.length}</p>
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