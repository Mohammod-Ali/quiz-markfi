import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCart from './TopicCart';

const Topics = () => {
    const quizzes = useLoaderData()
    return (
        <div className='cart'>
            {
                quizzes.data.map(quiz => <TopicCart
                    key={quiz.id}
                    quiz={quiz}
                ></TopicCart>)
            }
            </div>
    );
};

export default Topics;