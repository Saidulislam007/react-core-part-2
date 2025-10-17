import React from 'react';

const Country2 = ({country}) => {
  console.log(country.languages.languages)
  return (
    <div>
      <img src={country.flags.flags.png}></img>
      <p>Name: {country.name.common}</p>
      <p>Area: {country.area.area}</p>
    </div>
  );
};

export default Country2;