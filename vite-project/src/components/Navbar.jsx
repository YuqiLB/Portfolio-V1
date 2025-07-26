import React from 'react'

const navItems = [
    {name: 'Home', link:'home'},
    {name: 'About', link: 'about'},
    {name: 'Contacts', link: 'contacts'},
    
];
const Navbar = () => {
  return (
    <div>Navbar
        <img src="" alt="" />
        <ul>
            <li>Home</li>
            <li>Contacts</li>
            <li>About</li>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default Navbar