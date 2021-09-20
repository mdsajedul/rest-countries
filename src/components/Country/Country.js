import React from 'react';

const Country = (props) => {
    console.log(props)
    return (
        <div>
            <h4>This is {props.name}</h4>
            <p>Capital is : {props.capital}</p>
        </div>
    );
};

export default Country;