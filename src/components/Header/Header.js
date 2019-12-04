import React from 'react';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import CartButton from '../CartButton/CartButton';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = props => {
  return (
    <header className="site__header">
      <div className="site__header-container">
        <CategoriesMenu />
        <NavLink to="/">
          <h1 className="site__header__title">Aglaea</h1>
        </NavLink>
        <CartButton />
      </div>
    </header>
  );
};

export default Header;
