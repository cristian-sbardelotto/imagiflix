/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

import emitter from './utils/eventEmmiter';

import { URL, APISTRING, APIKEY, EVENTS } from './data/constants';

import Hero from './components/Hero/index';
import Loading from './components/Loading/index';
import NavBar from './components/Navbar/index';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './tailwind.css';

export enum TitleType {
  Movie = 'movie',
  Serie = 'tv'
}

export interface Title {
  type: TitleType;
  id: number | string;
}

const App = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [series, setSeries] = useState();
  const [upcoming, setUpcoming] = useState<any[]>([]);
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState<boolean>(true);

  const moviesUrl =  `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`;
  const seriesUrl = `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`;
  const upcomingUrl = `${URL}/movie/upcoming${APISTRING}&sort_by=popularity.desc`;

  const fetchData = async () => {
    try {
      const movies = await fetch(moviesUrl);
      const moviesData = await movies.json();
      setMovies(moviesData.results);

      const series = await fetch(seriesUrl);
      const seriesData = await series.json();
      setSeries(seriesData.results);

      const upcoming = await fetch(upcomingUrl);
      const upcomingData = await upcoming.json();
      setUpcoming(upcomingData.results);

      setLoading(false);
    } catch {
      setMovies([]);
    }
  };

  const getFeaturedMovie = () => movies && movies[0];

  const getMovieList = () => {
    if (movies) {
      const [...movieList] = movies;
      return movieList;
    }
    return [];
  };

  const getTitle = async ({type, id}: Title) => {
    try {
      const title = await fetch(`${URL}/${type}/${id}${APISTRING}`);
      const titleData = await title.json();
      setTitle(titleData.results);

    } catch {
      setTitle(undefined);
    };
  };

  useEffect(() => {
    fetchData();

    emitter.addListener(EVENTS.PosterClick, getTitle);
  }, []);

  useEffect(() => title && console.log(title), [title]);

  return (
    <div className='m-auto antialiased font-sans bg-stone-900 text-white bg-red'>
      <NavBar />
      {loading ? <Loading /> : (
        <>
          <Hero {...getFeaturedMovie()}/>
          <Carousel title='Filmes populares' data={getMovieList()}  />
          <Carousel title='Séries populares' data={series} />
          <Carousel title='Em breve' data={upcoming} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
