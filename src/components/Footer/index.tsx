import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import './index.css';

const Footer = () => {
  const date = new Date();

  return (
    <footer className='px-12 mt-36 pb-4 text-sm text-stone-500'>
      <FontAwesomeIcon className='mr-4' icon={faFacebookSquare} size='2x' />
      <FontAwesomeIcon className='mr-4' icon={faInstagram} size='2x'/>
      <FontAwesomeIcon className='mr-4' icon={faTwitter} size='2x'/>
      <FontAwesomeIcon icon={faYoutube} size='2x'/>

      <div className='grid grid-cols-4 gap-2 my-5'>
        <a href="#">Idiomas e legendas</a>
        <a href="#">Audiodescrição</a>
        <a href="#">Centro de ajuda</a>
        <a href="#">Cartão pré-pago</a>
        <a href="#">Imprensa</a>
        <a href="#">Relação com investidores</a>
        <a href="#">Carreiras</a>
        <a href="#">Termos de uso</a>
        <a href="#">Privacidade</a>
        <a href="#">Avisos legais</a>
        <a href="#">Preferências de cookies</a>
        <a href="#">Informações corporativas</a>
        <a href="#">Entre em contato</a>
      </div>

      <p>© 1997 - {date.getFullYear()} Imagiflix, Inc.</p>
    </footer>
  );
};

export default Footer;
