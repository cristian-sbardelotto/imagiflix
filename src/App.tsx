/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

import { URL, APISTRING } from './data/constants';

import Hero from './components/Hero/index';
import Loading from './components/Loading/index';
import NavBar from './components/Navbar/index';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './tailwind.css';

const App = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [series, setSeries] = useState();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const movies = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );
      const moviesData = await movies.json();
      setMovies(moviesData.results);

      const series = await fetch(
        `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`
      );
      const seriesData = await series.json();
      setSeries(seriesData.results);

      setLoading(false);
    } catch {
      setMovies([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getFeaturedMovie = () => movies && movies[0];

  const getMovieList = () => {
    if (movies) {
      const [...movieList] = movies;
      return movieList;
    }
    return [];
  };

  return (
    <div className='m-auto antialiased font-sans bg-stone-900 text-white bg-red'>
      <NavBar />
      {loading ? <Loading /> : <Hero {...getFeaturedMovie()} />}
      <Carousel title='Filmes populares' data={getMovieList()} />
      <Carousel title='Séries populares' data={series} />
      <Footer />
    </div>
  );
};

export default App;
