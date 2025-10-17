import React, { useState } from 'react';
import './Box.css'
const BoxName = ({country,handleClick}) => {
  console.log(handleClick)
  const[visited, setVisited]=useState(false);
  const handleVisited=()=>{
    setVisited(!visited);
    handleClick(country);
  }
  return (
    
    <div className='box'>
      <img src={country.flags.flags.png}></img>
      <p>Name: {country.name.common}</p>
      <p>Area: {country.area.area}</p>
      <button onClick={handleVisited }>{visited? 'visited': 'not visited'}</button>
    </div>
    
  );
};

export default BoxName;