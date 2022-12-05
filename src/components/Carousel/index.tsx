import React from 'react';
import Slick from 'react-slick';
import Poster from '../Poster/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';

import mockData, { Movie } from '../../data/mock';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

interface CarouselData {
  title?: string;
  data?: Movie[];
  getTitle?: () => void;
}

const Carousel = ({
  title = 'Filmes em destaque',
  data = mockData,
  getTitle
}: CarouselData) => {
  enum Direction {
    left,
    right,
  }

  const SlickArrow = ({
    direction,
    onClick,
  }: {
    direction: Direction;
    onClick?: () => void;
  }) => {
    return (
      <button
        type='button'
        className={`absolute w-16 h-72 z-10 top-4 bg-black pt- bg-opacity-50  ${
          direction ? 'right-0' : 'left-0'
        }`}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={direction ? faChevronRight : faChevronLeft}
          size='3x'
        />
      </button>
    );
  };

  const options = {
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <SlickArrow direction={Direction.left} />,
    nextArrow: <SlickArrow direction={Direction.right} />,
  };

  return (
    <section className='carousel'>
      <h2 className='relative text-xl ml-8 mb-4'>{title}</h2>
      <Slick className='relative' {...options}>
        {data.map((movie, index) => Poster(movie, index))}
      </Slick>
    </section>
  );
};

export default Carousel;
