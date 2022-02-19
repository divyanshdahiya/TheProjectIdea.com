import React from "react";

// css imported in find projects.jsx

function ProjectCard({ data }) {
  return (
    // <div className="project-card">
    //   <span className="card-diificulty">{data.difficulty}</span>
    //   <h2 className="card-heading">Build a custom google maps theme </h2>
    //   <p className="card-description">{data.description}</p>
    //   <p className="card-tech">
    //     {data.tech.map((e) => {
    //       return (
    //         <>
    //           <span>{e}</span>
    //         </>
    //       );
    //     })}
    //     <span>JavaScript</span>
    //     <span>HTMl</span>
    //   </p>
    //   <button className="card-btn">
    //     <a href={data.link} target="blank">
    //       View Project ->
    //     </a>
    //   </button>
    // </div>
    <div className="project-card">
      <span className="card-diificulty">Easy</span>
      <h2 className="card-heading">Build a custom google maps theme </h2>
      <p className="card-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure natus
        aliquam alias impedit perferendis praesentium suscipit aspernatur
        recusandae eos. Cupiditate perferendis, accusantium aliquid sapiente
        exercitationem magni. Dolor, minima odio nulla adipisci temporibus
        dolores corrupti voluptate, est voluptates, quas modi sequi mollitia?
        Corporis ratione quis ullam a provident animi consequuntur beatae?
      </p>
      <p className="card-tech">
        <span>JavaScript</span>
        <span>HTMl</span>
      </p>
      <button className="card-btn">
        <a href="" target="blank">
          View Project
        </a>
      </button>
    </div>
  );
}

export default ProjectCard;
