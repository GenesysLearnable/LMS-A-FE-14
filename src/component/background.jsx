import React from 'react';
import '../App.css'

const Background = ({ children }) => {
    return (
        <div className="back-color">
            <div className='left'></div>
            <div className='right'></div>
            {children}
        </div>
    );
};

export default Background;