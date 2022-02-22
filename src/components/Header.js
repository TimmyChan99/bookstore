import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <p>BookStore CMS</p>
    <nav>
      <ul>
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categorie">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
