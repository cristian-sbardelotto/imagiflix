import React from 'react';
import Slick from 'react-slick';

import mockData from '../../data/mock';

const Carousel = ({ data = mockData }) => {
  const options = {
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
  };

  return (
    <Slick {...options}>
      {data.map(({ cover, title }) => (
        <article>
          <img src={cover} alt={title} className='h-72' />
        </article>
      ))}
    </Slick>
  );
};

export default Carousel;