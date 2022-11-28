import React, { useState, useEffect } from 'react';

import { URL, APISTRING } from './data/constants';

import Hero from './components/Hero/index';
import Loading from './components/Loading/index';
import NavBar from './components/Navbar/index';
import Carousel from './components/Carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './tailwind.css';

const App = () => {
  const [movies, setMovies] = useState<object[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
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
      {loading ? <Loading /> : <Hero {...movies[0] } />}
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default App;
