import React from "react";
import shoppingCartIcon from "../../assets/icons/shopping_cart-24px.svg";
import "./Cart.css";

const Cart = props => {
  return (
    <button className="btn-underline">
      <img src={shoppingCartIcon} alt="" className="cart__icon" />
      Koszyk(79.99zł)
    </button>
  );
};

export default Cart;
