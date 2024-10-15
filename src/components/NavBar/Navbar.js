import React from 'react';
import './navBarStyled.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navBar'>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/cremas">Cremas</Link></li>
      <li><Link to="/maquillajes">Maquillajes</Link></li>
      <li><Link to="/exfoliantes">Exfoliantes</Link></li>
      <CartWidget number={7} />
    </div>
  );
};

export default Navbar;