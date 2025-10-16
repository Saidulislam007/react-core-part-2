import React, { use } from 'react';
import Countrys from '../Countrys/Countrys';
import Country2 from '../Country2/Country2';

const Countries = ({countriesPromise}) => {
  const countriesData=use(countriesPromise)
  const countries=countriesData.countries;
  return (
    <div>
      <h1>in the Countries:{countries.length} </h1>
      {
        countries.map(country=> <Country2 country={country}></Country2>)
      }
    </div>
  );
};

export default Countries;