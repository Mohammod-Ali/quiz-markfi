import React from 'react';

const TopicCart = ({quiz}) => {
    const {name, logo, total} = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-cart'>
                <h5>{name}</h5>
                <p><small>Quiz: {total}</small></p>
                <button>Start Quiz</button>
            </div>
        </div>
    );
};

export default TopicCart;