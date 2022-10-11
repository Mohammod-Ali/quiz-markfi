import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizzes = useLoaderData()
    console.log(quizzes.data)
    return (
        <div className='cart'>
            {
                quizzes.data.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;