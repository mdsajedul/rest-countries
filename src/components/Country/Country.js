import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.countries)
    const {name,flag,capital,languages,population,region,subregion,timezones,currencies} = props.country;
    console.log(languages[0].name)
    return (
        <div className='country'>
            <h4>This is {name}</h4>
            <p>Capital is : {capital}</p>
            <img height="30px" width="50px" src={flag} alt="" />
            <p>Population : {population}</p>
            {/* <p>Timezone: {timezones}</p> */}
            <p>Language :{languages[0].name}</p>
        </div>
    );
};

export default Country;