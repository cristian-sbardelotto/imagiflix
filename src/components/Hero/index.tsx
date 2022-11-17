import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
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
        <p className='text-3xl mb-6'>Assista agora:</p>
        <h2 className='text-6xl font-bold mb-8'>{title}</h2>
        <p className='text-base'>
          Nota <span className={`rounded-full px-3 py-2 mx-2 bg-black bg-opacity-75 border-4 ${getBorderColor()}`}>{score}</span>
        </p>
        <button className='text-base py-2 px-8 mr-2 mt-10 rounded bg-black bg-opacity-50 hover:bg-opacity-75 hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>
          <FontAwesomeIcon className='mr-2' icon={faPlay} /> Assitir
        </button>

        <button className='text-base py-2 px-8 rounded bg-black bg-opacity-50 hover:bg-opacity-75 hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>
          <FontAwesomeIcon className='mr-2' icon={faPlus} /> Minha lista
        </button>
      </article>
    </header>
  );
};

export default Hero;