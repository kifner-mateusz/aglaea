import React from "react";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import Cart from "../Cart/Cart";

import "./Header.css";

const Header = props => {
  return (
    <header className="site__header">
      <div className="site__header-container">
        <CategoriesMenu />
        <h1 className="site__header__title">Aglaea</h1>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
