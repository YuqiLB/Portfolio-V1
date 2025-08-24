import React from 'react'
import Navbar from '../components/Navbar.jsx'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>

      <div className="home-container">
        <section id="about">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ex voluptas, nobis dignissimos optio voluptates perspiciatis distinctio ut et nam fugiat corrupti eaque. Explicabo repudiandae dolores beatae laborum sapiente quam?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, ut! Fugiat dolore iure esse labore excepturi ab optio mollitia! Totam odit dolores qui numquam. Amet veniam corporis qui id aspernatur?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos excepturi eveniet laudantium deserunt laboriosam a nemo asperiores! Sed veritatis cumque fuga, provident dolorum autem harum excepturi perferendis sequi saepe?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit dicta aliquam ea, neque nobis. Officia necessitatibus repellat earum ipsum expedita. Pariatur nam temporibus tempore quisquam non nulla! Consequatur, sunt.</p>
        </section>

        <section id="experience">Experience content here</section>
        <section id="projects">Projects content here</section>
      </div>
    </div>
  )
};

export default Home;
