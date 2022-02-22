import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <p>BookStore CMS</p>
    <nav>
      <ul>
        <NavLink to="/">BOOKS</NavLink>
        <NavLink to="/">CATEGORIES</NavLink>
      </ul>
    </nav>
  </header>
);

export default Header;
