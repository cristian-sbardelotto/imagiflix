import React from 'react';

import Hero from './components/Hero/index';
import NavBar from './components/Navbar/index';

import './tailwind.css';

const App = () => {
  return (
    <div className='m-auto antialiased font-sans bg-black text-white'>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
