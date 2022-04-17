import React from "react";
import CartIcon from "./CartIcon";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <CartIcon />
    </div>
  );
};

export default Header;
