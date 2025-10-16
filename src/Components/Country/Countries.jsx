import React, { use } from 'react';
import Countrys from '../Countrys/Countrys';

const Countries = ({countriesPromise}) => {
  const countriesData=use(countriesPromise)
  const countries=countriesData.countries;
  return (
    <div>
      <h1>in the Countries:{countries.length} </h1>
      {
        countries.map(country => <Countrys country={country} ></Countrys>)
      }
    </div>
  );
};

export default Countries;