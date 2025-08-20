import React from 'react';
import './education.css'; // Importing CSS

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "NIT Kurukshetra",
    duration: "2023 - 2026",
    description: "8.8235",
  },
  {
    degree: "B.Sc (Mathematics)",
    institution: "Kashi Naresh Govt. P.G. College",
    duration: "2019 - 2022",
    description: "76.83%",
  },
   {
    degree: "Intermediate",
    institution: "Vibhuti Narayan Govt. Intermediate College",
    duration: "2018 - 2019",
    description: "81.6%",
  },
   {
    degree: "High School",
    institution: "UNIC P.I. college",
    duration: "2016 - 2017",
    description: "83.5%",
  },
];

const Education = () => {
  return (
    <section className="container education__container" id="education">
  <h2 className="education__title">🎓 Education</h2>
  <div className="education">
    {educationData.map((edu, index) => (
      <div key={index} className="education__item">
        <h3 className="education__degree">{edu.degree}</h3>
        <p className="education__institution">{edu.institution}</p>
        <p className="education__duration">{edu.duration}</p>
        <p className="education__description">{edu.description}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Education;
