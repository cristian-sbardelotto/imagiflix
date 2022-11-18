import React from 'react';

import Hero from './components/Hero/index';
import NavBar from './components/Navbar/index';
import Carousel from './components/Carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './tailwind.css';

const App = () => {
  return (
    <div className='m-auto antialiased font-sans bg-black text-white'>
      <NavBar />
      <Hero />
      <Carousel />
    </div>
  );
};

export default App;
