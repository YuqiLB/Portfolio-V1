import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  const scrollToSection = (id) => {
      document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  }
    const openSidebar = () => {
    sidenav.classList.add("show");
    document.body.classList.add("long");   
  };
  const closeSidebar = () => {
    sidenav.classList.remove("show");
    document.body.classList.remove("long"); // remove when closed
  };
  const scrollAbout= () => {
    sidenav.classList.remove("show");
    document.body.classList.remove("long");
    scrollToSection("about")
  }
  const scrollExperience= () => {
    sidenav.classList.remove("show");
    document.body.classList.remove("long");
    scrollToSection("experience")
  }
  const scrollProjects= () => {
    sidenav.classList.remove("show");
    document.body.classList.remove("long");
    scrollToSection("projects")
  }

  return (
    <div>
      <button id="open-sidebar-button" onClick={openSidebar}aria-label="Open Sidebar">
        <img src="navopener.png" alt="navopener" />
      </button>
      <nav id = "sidenav">
        <button id="close-sidebar-button" onClick={closeSidebar}aria-label="Close Sidebar">
            <img src="navcloser.png" alt="navcloser" />
          </button>
        <div className="name">
          <h1 >Bond Liu</h1>
        </div>

        <h3>Full Stack Developer</h3>
        <p>
          I build fun, friendly interactive
        </p>
        <p>
           web experiences.
        </p>
        
        <div className="picture">
          <img src="Portfoliopicplaceholder.jpg" alt="Pictureofme" />
        </div>
=
        <ul>  
          <button onClick={scrollAbout} >About</button>
          <button onClick={scrollExperience}>Experience</button>
          <button onClick={scrollProjects}>Projects</button>
        </ul>

        <ul className="icons">  
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="linkedin.svg" alt="linkedin" className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="github.svg" alt="github" />
            </a>
          </li>
        </ul>
      </nav>
    </div>    
  )
}

export default Navbar