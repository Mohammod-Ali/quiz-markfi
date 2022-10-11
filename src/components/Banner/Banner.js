import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`, height: '600px', backgroundRepeat: 'no-repeat', marginLeft: '50px'
          }} >
            <h1>This is banner section</h1>
        </div>
    );
};

export default Banner;