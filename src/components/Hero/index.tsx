import React from 'react';
import { IMAGEURL } from '../../data/constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import Score from '../Score/index';
import placeholder from '../../assets/hero.jpg';

const Hero = ({ backdrop_path = null, title = 'Avengers Endgame', vote_average = 10 }) => {

  return (
    <header className='box-border relative -mb-32 h-screen'>
      <img className='w-full' src={backdrop_path ? `${IMAGEURL}/original/${backdrop_path}` : placeholder} alt='Filme em destaque' />

      <div className='w-full h-full absolute left-0 bottom-0 bg-gradient-to-b from-transparent to-black'></div>

      <article className='absolute bottom-0 mb-64 px-8'>
        <p className='text-3xl mb-6'>Assista agora:</p>
        <h2 className='text-6xl font-bold mb-8'>{title}</h2>
        <p className='text-base'>
          Nota <Score value={vote_average} />
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
