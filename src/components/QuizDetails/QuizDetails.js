import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetail from '../QuizDetail/QuizDetail';

const QuizDetails = () => {
    const quiz = useLoaderData()
    console.log(quiz)
    return (
        <div>
            <h1>Quiz Name: {quiz.data.name}</h1>
            {
                quiz.data.questions.map(quiz => <QuizDetail
                key={quiz.id}
                quiz={quiz}
                ></QuizDetail>)
            }
        </div>
    );
};

export default QuizDetails;