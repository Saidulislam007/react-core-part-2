import React, { use } from 'react';
import BoxName from '../Box/BoxName';



const Countries = ({countriesPromise}) => {
  const countriesData=use(countriesPromise)
  const countries=countriesData.countries;
  return (
    <div className='countries'>
      <h1>in the Countries: </h1>
      {
        countries.map(country=> <BoxName country={country}></BoxName>)
      }
    </div>
  );
};

export default Countries;