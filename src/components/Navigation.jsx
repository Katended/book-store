import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const navbars = [
  {
    to: '/',
    text: 'BOOKS',
  },
  {
    to: '/Categories',
    text: 'CATEGORIES',
  },
];

const Navigation = () => (
  <div className="navbar">
    <nav>
      <h1 className="logo">Bookstore CMS</h1>
      <ul>
        {navbars.map((navlink) => (
          <li key={navlink.to}>
            <NavLink to={navlink.to} className="">
              {navlink.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <button type="button" className="login-btn">
        <FontAwesomeIcon icon={faUser} />
      </button>

    </nav>
  </div>
);

export default Navigation;
