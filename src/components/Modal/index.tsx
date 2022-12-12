import React from 'react';

import Score from '../Score/index';

import { IMAGEURL } from '../../data/constants';

const Modal = ({
  poster_path,
  title,
  original_title,
  name,
  original_name,
  overview,
  vote_average,
  runtime,
  number_of_seasons,
  video,
}: any) => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center'>
      <article className='w-4/5 h-4/5 flex gap-48 bg-black shadow-3xl opacity-95'>
        <img
          src={`${IMAGEURL}/w500/${poster_path}`}
          alt={title ? title : name}
        />

        <div className='relative grid place-items-center'>
          <h2 className='text-4xl font-bold py-3'>{title ? title : name}</h2>
          <h6 className='font-bold py-3'>{original_title ? original_title : original_name}</h6>
          <Score value={vote_average} />
          <span className='py-3'>{runtime ? `${runtime}min` : `${number_of_seasons} temporadas`}</span>
          <p className='absolute py-3'>{overview}</p>
        </div>
      </article>
    </div>
  );
};

export default Modal;
