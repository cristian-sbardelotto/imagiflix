import React from 'react';
import { Movie } from '../../data/mock';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import Score from '../Score/index';

import './index.css';

const Poster = ({ cover, title, score }: Movie, index: number) => (
  <article
    className='relative transition-all duration-500 ease-in-out transform hover:scale-110 hover:z-10'
    key={index}
  >
    <img src={cover} alt={title} className='h-72' />
    <div className='poster absolute inset-0 h-full grid place-items-center px-4 w-full bg-black bg-opacity-75 transition-all duration-500 ease-in-out cursor-pointer'>
      <FontAwesomeIcon icon={faPlayCircle} size='5x' />
      <h2 className='text-2xl'>{title}</h2>
      <Score value={score} />
    </div>
  </article>
);

export default Poster;
