import React from 'react';


import Hero from './components/Hero/index';
import NavBar from './components/Navbar/index';

import '~slick-carousel/slick/slick.css';
import '~slick-carousel/slick/slick-theme.css';

import './tailwind.css';

const App = () => {
  return (
    <div className='m-auto antialiased font-sans bg-black text-white'>
      <NavBar />
      <Hero />
    </div>
  );
};

export default App;
