import React from 'react';

const Banner = () => {
  return (
    <div className='banner'>
      <h1>Explore the universe</h1>
      <div className='redirect container'>
        <a href="#character-slide" className='button'>
          Characters
        </a>
        <a href="#people-slide" className='button'>
          Planets
        </a>
        <a href="#vehicle-slide" className='button'>
          Vehicles
        </a>
      </div>
    </div>
  );
};
export default Banner;