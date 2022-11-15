import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import logo from '../../assets/logo-imagiflix.png';
import placeholderUser  from '../../assets/user.jpg';

const NavBar = () => {
  return (
    <nav className='absolute top-0 left-0 p-8 grid grid-cols-2 w-full'>
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
          <button className='absolute right-3 py-1'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <div className="flex gap-2">
          <img src={placeholderUser} alt='Imagiflix User' />
          <button>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>

          <ul className='hidden'>
            <li><a href='#account'>Minha conta</a></li>
            <li><a href='#logout'>Sair</a></li>
          </ul>

        </div>
      </div>
    </nav>
  )
};

export default NavBar;