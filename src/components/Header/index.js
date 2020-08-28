import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <ul className="App-header">
      <li>
        <Link className="Title" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="Title" to="/about">
          About Us
        </Link>
      </li>
      <li>
        <Link className="Title" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );
};

export default Header;
