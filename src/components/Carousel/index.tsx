import React from 'react';
import Slick from 'react-slick';

import mockData, { Movie } from '../../data/mock';

const Poster = ({ cover, title, score }: Movie, index: number) => (
  <article key={index}>
    <img src={cover} alt={title} className='h-72' />
  </article>
);

interface CarouselData {
  title?: string;
  data?: Movie[];
}

const Carousel = ({ title = 'Filmes em destaque', data = mockData }: CarouselData) => {
  const options = {
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <section>
      <h2>{title}</h2>
      <Slick {...options}>
        {data.map((movie, index) => Poster(movie, index))}
      </Slick>
    </section>
  );
};

export default Carousel;