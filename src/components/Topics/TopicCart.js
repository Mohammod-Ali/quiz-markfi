import React from 'react';
import { Link } from 'react-router-dom';

const TopicCart = ({quiz}) => {
    const {name, logo, total, id} = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-cart'>
                <h5>{name}</h5>
                <p><small>Quiz: {total}</small></p>
                <button><Link to={`/quiz/${id}`}>Start Quiz</Link></button>
            </div>
        </div>
    );
};

export default TopicCart;