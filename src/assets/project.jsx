import './project.css';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import projects from './json/projects.json'; // Import the JSON data

const FrameBox = ({ src, href, index }) => {
    const [ref, inView] = useInView({
      triggerOnce: false,
    });
  
    return (
      <div ref={ref} className={`framebox ${inView ? 'fade-in' : ''}`}>
        <img className='iframe' src={src} alt={`project ${index + 1}`} />
        <button className='viewbtn'>
          <a
            style={{ color: "inherit", textDecoration: "none" }}
            href={href}
            target='_blank'
          >
            Visit
          </a>
        </button>
      </div>
    );
  };


  const Project = () => {
    const [visibleProjects, setVisibleProjects] = useState(3);
  
    const showMoreProjects = () => {
      setVisibleProjects(prevVisible => prevVisible + 3);
    };
    return (
      <>
        <div className="projectcontainer u-s-n">
          <div>
            <h1>Projects</h1>
          </div>
          <div>
            <button className="filterbtn">All</button>
            <button className="filterbtn">FullStack</button>
            <button className="filterbtn">UI/UX</button>
          </div>
        </div>
        <div className='frames u-s-n'>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <FrameBox
              key={index}
              index={index}
              src={project.src}
              href={project.href}
            />
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="projectcontainer" style={{ marginTop: "10px", justifyContent: "center", alignItems: "center" }}>
            <button className="filterbtn" onClick={showMoreProjects}>Show More</button>
          </div>
        )}
        
      </>
    );
  }
  
  export default Project;
  