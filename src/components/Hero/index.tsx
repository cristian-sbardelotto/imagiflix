import React from 'react';
import placeholder from '../../assets/hero.jpg';

const Hero = ({ title = 'Avengers Endgame', score = 10 }) => {
  const getBorderColor = () => {
    if (score >= 7) {
      return 'border-green-400';
    } else if (score > 4 && score < 7) {
      return 'border-yellow-400';
    } else {
      return 'border-red-400';
    }
  };

  return (
    <header className='relative'>
      <img className='w-full' src={placeholder} alt='Filme em destaque' />
    
      <article className='absolute bottom-0 mb-64 px-8'>
        <p className='text-3xl'>Assista agora:</p>
        <h2 className='text-6xl font-bold mb-8'>{title}</h2>
        <p className='text-base'>
          Nota <span className={`rounded-full p-3 mx-2 bg-black bg-opacity-75 border-4 ${getBorderColor()}`}>{score}</span>
        </p>
        <button className='text-base'>Assitir</button>
        <button className='text-base'>Minha lista</button>
      </article>
    </header>
  );
};

export default Hero;