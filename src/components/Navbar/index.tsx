import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo-imagiflix.png';
import placeholderUser  from '../../assets/user.jpg';

import './index.css';

const NavBar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const handleUserClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar absolute top-0 left-0 p-8 grid grid-cols-2 w-full z-20'>
      <div className='justify-self-start flex items-center gap-9'>
        <h1 className='hidden'>ImagiFlix</h1>
        <img src={logo} alt='Imagiflix Logo' />

        <ul className='justify-self-start flex gap-10'>
          <li className='font-bold'>
            Início
          </li>

          <li className='font-bold'>
            <a href="#series">Séries</a>
          </li>

          <li className='font-bold'>
            <a href="#movies">Filmes</a>
          </li>
        </ul> 
      </div>

      <div className='flex gap-6 items-center justify-self-end'>
        <form className="flex relative w-64">
          <input className='w-full bg-black border border-white outline-none rounded px-3 py-1 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100' type='text' placeholder="Títulos, gente e gêneros" />
          <button className='absolute right-3 py-1' onClick={e => e.preventDefault()}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <div className="relative flex gap-2">
          <img className='hover:cursor-pointer' src={placeholderUser} alt='Imagiflix User' onClick={handleUserClick} />
          <button onClick={handleUserClick}>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>

          <ul className={`absolute right-0 top-10 w-40 bg-black rounded pl-4 py-3 transition-all duration-300 ease-in-out ${!isMenuOpen && 'invisible opacity-0'}`}>
            <li><a href='#account' onClick={handleUserClick}>Minha conta</a></li>
            <li><a href='#logout' onClick={handleUserClick}>Sair</a></li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;