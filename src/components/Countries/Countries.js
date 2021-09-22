import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import RightBar from '../RightBar/RightBar';
import './countries.css';

const Countries = () => {
    const [countries,setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div >
            <div className="container">

                
                <div className="country-container">
                    
                    {
                        countries.map(country=> <Country  key={country.alpha3Code} country={country} ></Country>)
                    }
                </div>

                <div className='contianer-right'>
                    <RightBar countries={countries}></RightBar>
                </div>
            </div>
        </div>
    );
};

export default Countries;