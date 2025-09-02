import React from 'react'
import Navbar from '../components/Navbar.jsx'
import './Home.css'
import SplashCursor from '../components/SplashCursor.jsx';

const Home = () => {
  return (
    

    <div className="container">
      <Navbar/>
      <div className="home-container">
        <section id="about">
          <p>Hello! I'm a Calgary high school developer with a passion for designing clean, usable web experiences.</p>
          <p>My area of expertise is front-end development, at least for now. I enjoy seeing ideas evolve into interactive projects working with React.</p>
          <p>I thrive on curiosity and experimentation. I enjoy things from small coding challenges to building full web projects. </p>
          <p>What I love most is the mix of problem-solving and creativity in development. Between designing a clean interface, adding fun features, or writing insightful documentation, I learn something new from every project.</p>
          <p>If I'm not coding, you can probably find me playing an instrument (piano, clarinet, saxophone), on the badminton court, or maybe playing a new game. I'm always looking forward to meeting new people, finding new opportunities and create something worthwhile.</p>
        
        </section>

        <section id="experience">
          <h4>Experience</h4>
          <div className="robotics">
            <a href="https://www.robotevents.com/teams/V5RC/3388S" target="_blank" rel="noopener noreferrer">
              <h2>VEX Robotics Engineering Notebooker</h2>
              <h2> (2023–Present)</h2>
              <p>
As the notebooker for my VEX Robotics team, I document the full engineering design process — from brainstorming problems to developing solutions . I created and maintained a professional engineering notebook that displays our team's progress and decision-making.

Documented mechanical and programming progress using sketches, diagrams, and detailed analyses through our design process.

Organized entries to align with VEX's judging standards helping to contribute to award submissions

Collaborated with team members to ensure the most accurate and consistent representation of our work</p>
            </a>
          </div>
          <div className="volunteering">
            <a href="https://youthcentral.com/" target="_blank" rel="noopener noreferrer">
              <h2>Volunteering</h2>
              <p>Through my participation in volunteering, I have been able to combine my interests in community service with teaching as well as technology:

Youth Central - Supporting community initiatives in Calgary, helping to run events and programs which strengthen community connections with youth, elders and everyone in between.

Computer Science Teaching Assistant - Assisted in a high school computer science class by guiding students with my own programming experience

AI Education Futurlign - Volunteered to teach students introductory artificial intelligence concepts, helped in creating and directing activities that made advanced ideas approachable for youth and beginners.</p>
            </a>
          </div>
          <div className="Fmemories">
            <a href="https://foundmemories.org" target="_blank" rel="noopener noreferrer">
              <h2>Found Memories</h2>
              <p>Found Memories is a Non-Profit organization.</p>
              <p>Designed and programmed web page.</p>
            </a>
          </div>
            <a href="https://docs.google.com/document/d/e/2PACX-1vTOHX49yBnpx00ViTITl25lNwPUmylxJkKNzLIUWZr-3UThlowmqriwu3UDpftKtDaeyI7nTDitLg3_/pub" target="_blank" rel="noopener noreferrer">
              <h4>Full Resume ❐</h4>
            </a>
        </section>
        
        
        <section id="projects">
          
          <h4>Projects</h4>
          <div className="cropper">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <h2>Cropper</h2>
              <p>
                Coming Soon!! 
              </p>
              <p>Fast, efficient, clean way to crop and edit pictures. Rapidfire!</p>
            </a>
          </div>
          
          
        </section>
      </div>
    </div>
  )
};

export default Home;
