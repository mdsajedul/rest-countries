import React from 'react';
import MostPopulated from '../MostPopulated/MostPopulated';
import './right-bar.css'

const RightBar = (props) => {
    return (
        <div className="container-bar">
           
            <MostPopulated countries={props} ></MostPopulated>
        </div>
    );
};

export default RightBar;