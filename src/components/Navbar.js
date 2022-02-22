import React from 'react'
import { Link } from 'react-router-dom';
import '../styling/navbar.css';

export default function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar-logo'>
            <h1>NEWS</h1>
        </div>

        <div className='navbar-links'>
            <li >
                <Link className='home-link' to="/">Home</Link>
            </li>
        </div>

    </div>
  )
}
