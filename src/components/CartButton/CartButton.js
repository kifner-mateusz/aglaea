import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ShopContext } from '../../context/ShopContext';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './CartButton.css';

const CartButton = props => {
  const shop = useContext(ShopContext);
  const cart = shop.cart;

  return (
    <NavLink className="cart" to="/cart">
      <button className="btn-underline">
        <ShoppingCartIcon />
        Koszyk({cart.totalPrice.toFixed(2)} {cart.totalPriceCurrency})
      </button>
    </NavLink>
  );
};

export default CartButton;
