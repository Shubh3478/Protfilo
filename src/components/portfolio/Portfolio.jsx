import "./portfolio.css";
import IMG from "../../assets/shoeecom.png"
import IMG1 from '../../assets/Healthbooker.png'
import IMG2 from "../../assets/Proffolio.png"
import IMG4 from "../../assets/weather.png"
import IMG3 from "../../assets/RandomGif.png"
// import IMG4 from "../../assets/fh-huquq.png";
// import IMG5 from "../../assets/Jokes Project.jpg";
// import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "MediLink",
      img: IMG1,
      description:
        "Built a web-based platform using MERN stack that allows patients to book, manage, and track doctor appointments with a responsive UI .",
      technologies: "React js | CSS | Express js | Mongodb",
      link: "https://educational-website-reactjs.netlify.app/",
      github: "https://github.com/Rasif-Taghizada/Educational-Website-ReactJs",
    },
    {
      id: 2,
      title: "StepStyle",
      img: IMG,
      description:
        "A dynamic and responsive shoe store website designed to simulate a real-world shopping experience.",
      technologies: "HTML | CSS | JavaScript | Express Js | Mongodb",
      link: "https://stepstyles.onrender.com/",
      github: "https://github.com/Rasif-Taghizada/fh-huquq.com",
    },
    {
      id: 3,
      title: "Portfolio",
      img: IMG2,
      description: "Designed and developed a fully responsive personal portfolio to showcase projects, technical skills, and contact information.",
      technologies: "React js | CSS",
      link: "https://fs-code-task-two.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/FS-Code-Task",
    },
    {
      id: 4,
      title: "Random Gif Generator",
      img: IMG3,
      description:
        "Built a fun GIF generator using React and Giphy API. Features include random and tag-based GIF search,and responsive UI with Tailwind CSS. ",
      technologies: "Reactjs + Vite | Tailwind CSS",
      link: "https://random-gif-snowy.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    },
    {
      id: 5,
      title: "Weather APP",
      img: IMG4,
      description:
        "Developed a weather web app using HTML, CSS, and JavaScript that fetches real-time weather data from a public API.",
      technologies: "HTML | CSS | Javascript",
      link: "https://checkweathersapp.netlify.app/",
      github: "https://github.com/ashut3005/WeatherApp",
    },
    // {
    //   id: 6,
    //   title: "Fs Poster Website",
    //   img: IMG,
    //   description:
    //     "Real-world group project which is still in progress and will provide educational platform for future young developers",
    //   technologies: "Html | Scss | Javascript",
    //   link: "https://fs-poster-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    // },
  ];

  return (
    <section id="portfolio">
      {/* <h5>My Recent Work</h5> */}
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
