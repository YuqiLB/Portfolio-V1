import React from 'react'
import Navbar from '../components/Navbar.jsx'
import './Home.css'
import navImage from '/navImage.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const sections = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
];

const Home = () => {
  return (
    <div className="layout">
      <div className="sidebar">
        <div className="brand">
          <img src={navImage} alt="logo" className="brand-img" />
          <div className="brand-text">
            <h1 className="name">Name</h1>
            <p className="role">Programmer, Writer</p>
            <p className="tagline">
              I build web pages sometimes.
            </p>
          </div>
        </div>

        <div className="side-nav" >
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`/${s.id}`} className="side-link">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="social">
          <a aria-label="GitHub" href="https://github.com/yourusername" className="social-icon">
            🐙
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com/in/yourprofile" className="social-icon">
            in
          </a>
          <a aria-label="Instagram" href="#insta" className="social-icon">
            📷
          </a>
          <a aria-label="Other" href="#other" className="social-icon">
            🌐
          </a>
        </div>
      </div>

      <main className="content">
        <section id="about" className="section">
          <div className="intro">
            <div>
              <h2>High School Student at Sir Winston Churchill High School</h2>
              <p className="subtitle">2023 — Present</p>
            </div>
            <div className="description">
              <p>
                I'm a new developer.
              </p>
              <p>
                In the past, I've competed in a few hackathons and coding competitions.
              </p>
              <p>
                I like spending my spare time running or playing games.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h3>Experience</h3>
          <p>Details about roles, responsibilities, and accomplishments go here.</p>
        </section>

        <section id="projects" className="section">
          <h3>Projects</h3>
          <p>Showcase of selected projects with descriptions and links.</p>
        </section>
      </main>
    </div>
  );
};

export default Home;
