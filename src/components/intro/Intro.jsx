import "./intro.css";

// import { FaAward } from "react-icons/fa";
import React from "react";
// import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.jpg'



const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Ashoutosh Tiwari" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 year</small>
            </article> */}
            {/* <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article> */}
          </div>
          <p>
            I am currently pursuing my MCA(Master's of Computer Application) from NIT Kurukshetra and specialize as a MERN Stack Developer. 
            I have hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
            I’m passionate about creating efficient, user-friendly solutions and continuously learning new technologies to improve 
            my skills and contribute meaningfully to modern web development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
