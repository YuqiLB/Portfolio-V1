import React from 'react'
import {Link} from "react-router-dom"
import navImage from '/navImage.png'
import './Navbar.css'

const navItems = [
    //{name: 'Home', link:''},
    {name: 'About', link: 'about'},
    {name: 'Contacts', link: 'contacts'},
    
];
const Navbar = () => {
  return (
    <header className="header">
      <Link>
      <img src={navImage} alt = "nav image" className="nav-image"></img>
      <h3 className="nav-text">Home</h3>
      </Link>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            <a href={item.link} className="nav-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>

    </header>
  );
};

export default Navbar