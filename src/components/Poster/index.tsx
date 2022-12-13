import React, { useContext } from 'react';

import { EventContext } from '../../context/eventContext';

import { Movie, TitleType } from '../../data/mock';

import { IMAGEURL, EVENTS } from '../../data/constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import Score from '../Score/index';

import './index.css';

const Poster = ({ cover, poster_path, title, name, vote_average, id }: Movie, index: number) => {

  const { dispatchEvent } = useContext(EventContext);

  const handleClick = () => {
    const type = title ? TitleType.Movie : TitleType.Serie;

    dispatchEvent(EVENTS.PosterClick, {type, id});
  };

  return (
    <article
      className='relative transition-all duration-500 ease-in-out transform hover:scale-110 hover:z-10'
      key={index}
      onClick={handleClick}
    >
      <img src={poster_path ? `${IMAGEURL}/w200/${poster_path}` : cover} alt={title ? title : name} className='h-72' />
      <div className='poster absolute inset-0 h-full grid place-items-center px-4 w-full text-center leading-5 bg-black bg-opacity-75 transition-all duration-500 ease-in-out cursor-pointer'>
        <h2 className='text-2xl'>{title ? title : name}</h2>
        <Score value={vote_average} />
        <FontAwesomeIcon icon={faPlayCircle} size='5x' />
      </div>
    </article>
  );
};

export default Poster;
