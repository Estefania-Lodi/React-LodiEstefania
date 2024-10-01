import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css';

const CartWidget = ({ number }) => {
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <div className='containerCart' onClick={handleClick}>
      <ShoppingCartIcon className='cartIcon' />
      <span className='cartNumber'>{number}</span>
    </div>
  );
};

export default CartWidget;