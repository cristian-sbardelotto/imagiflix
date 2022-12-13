/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import emitter from './utils/eventEmmiter';

import { URL, APISTRING, EVENTS } from './data/constants';

import { Title } from './data/mock';

import Hero from './components/Hero/index';
import Loading from './components/Loading/index';
import NavBar from './components/Navbar/index';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Modal from './components/Modal';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './tailwind.css';

const App = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [series, setSeries] = useState<any[]>([]);
  const [upcoming, setUpcoming] = useState<any[]>([]);
  const [title, setTitle] = useState<any[]>();
  const [search, setSearch] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const moviesUrl = `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`;
  const seriesUrl = `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`;
  const upcomingUrl = `${URL}/movie/upcoming${APISTRING}&sort_by=popularity.desc`;

  const searchMoviesUrl = `${URL}/search/movie${APISTRING}&query=${search}&sort_by=popularity.desc`;
  console.log(searchMoviesUrl);

  const getFeaturedMovie = () => movies && movies[0];

  const getMovieList = () => {
    if (movies) {
      const [...movieList] = movies;
      return movieList;
    }
    return [];
  };

  const getTitle = async ({ type, id }: Title) => {
    setLoading(true);
    const title = await axios.get(`${URL}/${type}/${id}${APISTRING}`);
    setTitle(title.data);
    setLoading(false);
  };

  const showModal = () => {
    setTitle(undefined);
  };

  const handleSearchInput = (searchInput = '') => {
    setSearch(searchInput);
  };

  useEffect(() => {
    emitter.addListener(EVENTS.PosterClick, getTitle);
    emitter.addListener(EVENTS.ModalClose, showModal);
    emitter.addListener(EVENTS.Search, handleSearchInput);

    const fetchData = async () => {
      try {
        let moviesUrlToUse = moviesUrl;

        if(search) {
          moviesUrlToUse = searchMoviesUrl;
        };

        const moviesData = await axios.get(moviesUrlToUse);
        setMovies(moviesData.data.results);

        const seriesData = await axios.get(seriesUrl);
        setSeries(seriesData.data.results);

        const upcomingData = await axios.get(upcomingUrl);
        setUpcoming(upcomingData.data.results);

        setLoading(false);
      } catch {
        setMovies([]);
        setSeries([]);
        setUpcoming([]);
        setLoading(false);
      }
    };

    fetchData();
  }, [moviesUrl, seriesUrl, upcomingUrl, search, searchMoviesUrl]);

  useEffect(() => title && console.log(title), [title]);

  return (
    <div className='m-auto antialiased font-sans bg-stone-900 text-white bg-red'>
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Hero {...getFeaturedMovie()} />
          <Carousel title='Filmes populares' data={getMovieList()} />
          <Carousel title='Séries populares' data={series} />
          <Carousel title='Em breve' data={upcoming} />
        </>
      )}
      <Footer />
      {!loading && title && <Modal {...title} />}
    </div>
  );
};

export default App;
