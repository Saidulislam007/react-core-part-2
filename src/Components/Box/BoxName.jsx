import React from 'react';
import './Box.css'
const BoxName = ({country}) => {
  return (
    
    <div className='box'>
      <img src={country.flags.flags.png}></img>
      <p>Name: {country.name.common}</p>
      <p>Area: {country.area.area}</p>
    </div>
    
  );
};

export default BoxName;