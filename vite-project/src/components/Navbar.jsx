import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  const scrollToSection = (id) => {
      document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  }
    const openSidebar = () => {
    sidenav.classList.add("show");
    document.body.classList.add("long");   // add "long" to body
  };
  const closeSidebar = () => {
    sidenav.classList.remove("show");
    document.body.classList.remove("long"); // remove when closed
  };

  return (
    <div>
      <button id="open-sidebar-button" onClick={openSidebar}>
        <img src="navopener.png" alt="navopener" />
      </button>
      <nav id = "sidenav">
        <h1>Name</h1>
        <h2>Full Stack Developer</h2>
        <ul>  
          <button id="close-sidebar-button" onClick={closeSidebar}>
            <img src="navcloser.png" alt="navcloser" />
          </button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("experience")}>Experience</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
        </ul>
      </nav>
    </div>    
  )
}

export default Navbar