import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,flag,capital,languages,population,region,subregion,timezones,currencies} = props.country;
    return (
        <div className='country'>

            <div>
                <h4>{name}</h4>
                <img height="30px" width="50px" src={flag} alt="" />
                <p>Capital : {capital? capital : 'Not Found'}</p>
               
                <p>Population : {population}</p>
                <p>Language :{languages[0].name}</p>
            </div>
           <div className="view-details">
               <h5 >View Details</h5>
           </div>
            
        </div>
    );
};

export default Country;