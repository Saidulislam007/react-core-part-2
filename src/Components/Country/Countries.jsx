import React, { use, useState } from 'react';
import BoxName from '../Box/BoxName';

const Countries = ({ countriesPromise }) => {
  const[visitedCountries,setVisitedCountries]=useState([]);
  const handleClick=(country)=>{
    const newVisitedCountries=[...visitedCountries,country]
    setVisitedCountries(newVisitedCountries);
  }

  const countriesData = use(countriesPromise)
  const countries = countriesData.countries;
  return (
    <div>
      <h1>in the Countries: </h1>
      <p>Total Country visited: {visitedCountries.length}</p>
    <ol>
      {
        visitedCountries.map(country=> (<li>{country.name.common}</li>))
      }
    </ol>
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px"
    }}>
        {
          countries.map(country => (<BoxName country={country}
            handleClick={handleClick}
          ></BoxName>))
        }
      </div>
    </div>
  );
};

export default Countries;