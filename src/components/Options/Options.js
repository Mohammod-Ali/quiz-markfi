import React from 'react';
import './Options.css'

const Options = ({option}) => {
    console.log(option)
    return (
        <div className='option'>
            <button>{option}</button>
        </div>
    );
};

export default Options;