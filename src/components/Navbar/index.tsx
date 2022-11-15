import React from "react";
import logo from '../../assets/logo-imagiflix.png';
import placeholderUser  from '../../assets/user.jpg';

const NavBar = () => {
  return (
    <nav className='absolute top-0 left-0 p-8 grid grid-cols-3 items-center justify-around w-full'>
      <div className='justify-self-start'>
        <h1 className='hidden'>ImagiFlix</h1>
        <img src={logo} alt='Imagiflix Logo' />
      </div>

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

      <div className='justify-self-end'>
        <form>
          <input type='text' placeholder="Títulos, gente e gêneros" />
          <button><i></i></button>
        </form>

        <div>
          <img src={placeholderUser} alt='Imagiflix User' />
          <button>
            <i></i>
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