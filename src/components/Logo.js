import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo-div">
      <NavLink to="/" className="link">
        <h2 className="logo">Luezoid</h2>
      </NavLink>
    </div>
  );
};

export default Logo;
