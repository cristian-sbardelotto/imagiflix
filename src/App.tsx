import React, { useState, useEffect } from 'react';

import { URL, APISTRING } from './data/constants';

import Hero from './components/Hero/index';
import NavBar from './components/Navbar/index';
import Carousel from './components/Carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './tailwind.css';

const App = () => {
  const [movies, setMovies] = useState<object[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch {
      setMovies([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => movies && console.log(movies), [movies]);

  return (
    <div className='m-auto antialiased font-sans bg-black text-white'>
      <NavBar />
      <Hero {...movies[0]} />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default App;
