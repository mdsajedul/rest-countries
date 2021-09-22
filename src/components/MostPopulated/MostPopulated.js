import React from 'react';
import './most-populated.css'

const MostPopulated = (props) => {
    // console.log(props.countries.countries)
    const AllCountries = props.countries.countries;
   const populationList = AllCountries.sort((a,b)=>{
       return a.population - b.population
   })

   const reversePopulationList = populationList.reverse();
   const firstFivePopulation = reversePopulationList.slice(0,6);
   console.log(firstFivePopulation)
   


    return (
        <div>
            <p> <b>Most Populated Country List</b> </p>
                <table>
                {
                    firstFivePopulation.map(country =><tr><td>{country.name}</td> <td>{country.population}</td> </tr> )
                }
                </table>
                <hr />
                <hr />
        </div>
    );
};

export default MostPopulated;