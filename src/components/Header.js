import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => (
  <header>
    <span>BookStore CMS</span>
    <nav>
      <ul>
        <li>
          <NavLink className="nav_link" to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink className="nav_link" to="/categorie">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
    <FaUserAlt className="user_icon" />
  </header>
);

export default Header;
