import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
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
                <div >
                    <h4>jello</h4>
                </div>
            </div>
        </div>
    );
};

export default Countries;