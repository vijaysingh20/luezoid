import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { cartSize } from "../App";

const CartIcon = () => {
  const size = useContext(cartSize);
  return (
    <NavLink to="/cart" className="link">
      <div className="cart-icon">
        <i className="fas fa-shopping-cart fa-2x">({size})</i>
      </div>
    </NavLink>
  );
};

export default CartIcon;
