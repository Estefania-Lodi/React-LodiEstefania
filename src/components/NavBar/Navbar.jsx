import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
  return (
    <div className='navBar'>
      <ul>
        <li><a href="/inicio">Inicio</a></li>
        <li><a href="/nosotros">Nosotros</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <CartWidget number={4} />
    </div>
  );
}

export default Navbar;