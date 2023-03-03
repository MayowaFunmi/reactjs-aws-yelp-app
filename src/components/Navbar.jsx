import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="https://www.yelp.com/assets/logo_desktop-20596b3570e5d5c717b5bb0b67bae6d9.png"
          alt="Yelp Logo"
        />
      </div>
      <ul className="navbar-nav">
        <Router>
          <li className="nav-item">
            <Link to="/">Restaurants</Link>
          </li>
          <li className="nav-item">
            <Link to="">Delivery</Link>
          </li>
          <li className="nav-item">
            <Link to="">Takeout</Link>
          </li>
          <li className="nav-item">
            <Link to="">Reservations</Link>
          </li>
          <li className="nav-item">
            <Link to="">More</Link>
          </li>
        </Router>
      </ul>
      <div className="navbar-search">
        <form>
          <input type="text" placeholder="Find" />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
