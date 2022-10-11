import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Quiz from '../Quiz/Quiz';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const quizzes = useLoaderData()
    console.log(quizzes.data)
    return (
        <div>
            
            <div className='header-img'>
                <Banner></Banner>
            </div>
            <div className='cart'>
            {
                quizzes.data.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
            </div>
        </div>
    );
};

export default Home;