import React from 'react';
import Options from '../Options/Options';
import './QuizDetail.css'

const QuizDetail = ({quiz}) => {
    const {question, options, correctAnswer} = quiz;
    console.log(quiz)
    const quizHandler = (option) =>{
        console.log(option)
        if(correctAnswer === option){
            alert(`Congratulations, Your correct ans:  ${correctAnswer}`)
        }
    }
    return (
        <div className='quiz-details'>
            <h3>Quiz{}:  {question}</h3>
            {
                options.map(option => <Options
                option={option}
                quizHandler={quizHandler}
                ></Options>)
            }
        </div>
    );
};

export default QuizDetail;