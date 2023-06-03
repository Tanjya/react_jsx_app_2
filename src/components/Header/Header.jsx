// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-section">
      <img src={logo} alt="" />
      <div>
        <a href="./Order">Order</a>
        <a href="./review">Order Review</a>
        <a href="./manage">Manage inventory</a>
        <a href="./login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
