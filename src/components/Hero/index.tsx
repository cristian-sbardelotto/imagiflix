import React from 'react';
import placeholder from '../../assets/hero.jpg';

const Hero = () => {
  return (
    <header className="">
      <img className='w-full' src={placeholder} alt='Filme em destaque' />
    </header>
  );
};

export default Hero;