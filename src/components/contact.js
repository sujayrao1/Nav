import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file
const contact=()=>{
    return(
        <>
        <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
        <h1>contact</h1>
        </>
    );
}

export default contact;