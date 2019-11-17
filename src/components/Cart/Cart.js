import React from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Cart.css";

const Cart = props => {
  return (
    <div className="cart">
      <button className="btn-underline">
        <ShoppingCartIcon />
        Koszyk(79.99zł)
      </button>
    </div>
  );
};

export default Cart;
