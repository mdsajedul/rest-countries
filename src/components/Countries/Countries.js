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
            <h1>Hello from countries {countries.length}</h1>
            <div className="container">

            
                <div className="country-container">
                    {
                        countries.map(country=> <Country country={country}></Country>)
                    }
                </div>
                <div >

                </div>
            </div>
        </div>
    );
};

export default Countries;