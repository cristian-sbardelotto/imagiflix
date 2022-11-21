import React from 'react';
import { Movie } from '../../data/mock';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Poster = ({ cover, title, score }: Movie, index: number) => (
  <article className='relative' key={index}>
    <img src={cover} alt={title} className='h-72' />
    <div className='absolute h-full w-full bg-black bg-opacity-75 transition-all duration-500 ease-in-out'>
      <FontAwesomeIcon icon={faPlayCircle} size='5x' />
      <h2>{title}</h2>
    </div>
  </article>
);

export default Poster;
