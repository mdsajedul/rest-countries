import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries,setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h1>Hello from countries {countries.length}</h1>
            {
                countries.map(country=> <Country countries={country}></Country>)
            }
        </div>
    );
};

export default Countries;