import React, { use } from 'react';


const Countries = ({countriesPromise}) => {
  const countriesData=use(countriesPromise)
    console.log(countriesData);
  return (
    <div>
      <h1>in the Countries: </h1>
    </div>
  );
};

export default Countries;