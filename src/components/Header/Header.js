import React from 'react';
import './header.css';

const Header = () => {
    
    return (
        <div className='nab-container'>
            <div className="nab-bar">
                <p><b>REST Countries</b></p>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#home">All Countries</a></li>
                    <li><a href="#home">About us</a></li>
                    <li><a href="#home">Home</a></li>
                    
                </ul>
            </div>
            
            <div id="search-container">
                <input type="text" name="" id="" />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Header;