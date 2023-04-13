import React from 'react';

import Score from '../Score/index';

import { EVENTS, IMAGEURL } from '../../data/constants';

import emitter from '../../utils/eventEmmiter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import './index.css';

interface ModalProps {
  poster_path?: string;
  title?: string;
  original_title?: string;
  name?: string;
  original_name?: string;
  overview?: string;
  vote_average?: string | number;
  runtime?: string | number;
  number_of_seasons?: string | number;
}

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
}: ModalProps) => {

  const handleClick = () => emitter.emit(EVENTS.ModalClose);

  return (
    <div className='fixed top-0 left-0 z-10 p-12 w-full h-screen grid place-items-center'>
      <article className='w-full h-full grid grid-flow-col auto-cols-auto p-8 bg-black shadow-lg opacity-90'>
        <img
          src={`${IMAGEURL}/w500/${poster_path}`}
          alt={title ? title : name}
          className='h-full w-4/5'
        />

        <div className='relative'>
          <FontAwesomeIcon
            size='2xl'
            icon={faClose}
            className='cursor-pointer absolute top-0 right-0 text-red-600'
            onClick={handleClick}
          />
          <h2 className='text-4xl font-bold py-3'>{title ? title : name}</h2>
          <h6 className='font-bold py-3'>
            {original_title ? original_title : original_name}
          </h6>
          <p className='my-8'>{overview}</p>
          <Score value={vote_average} />
          <span className='bg-red-600 rounded py-2 px-4 ml-2'>
            {runtime ? `${runtime}min` : `${number_of_seasons} temporadas`}
          </span>
        </div>
      </article>
    </div>
  );
};

export default Modal;
