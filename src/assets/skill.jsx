import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import skills from './json/skills.json'; 
import './skill.css';

function LeftToRightSkill({ label}) {
    const [ref, inView] = useInView({
      triggerOnce: false,
    });
  
    return (
      <div ref={ref} className={`label-box left-to-right ${inView ? 'animate' : ''}`}>
       {label}
      </div>
    );
  }
  
function RightToLeftSkill({ label }) {
    const [ref, inView] = useInView({
      triggerOnce: false,
    });
  
    return (
      <div ref={ref} className={`label-box right-to-left ${inView ? 'animate' : ''}`}>
        {label}
      </div>
    );
  }
  

function Skill() {
  const skillListRef = useRef();

  useEffect(() => {
    const linedropElement = document.querySelector('.linedrop');
    const skillListElement = skillListRef.current;

    if (linedropElement && skillListElement) {
      const skillListHeight = skillListElement.clientHeight;
      linedropElement.style.width = `${skillListHeight - 20}px`;
    }
  }, []);

  return (
    <>
      <div className="skillcontainer u-s-n">
        <h1>Skill Set</h1>
        <div className="skilllist" ref={skillListRef}>
          {skills.map((skill, index) => (
            index % 2 === 0 ? (
              <div className='skillleft' key={index}>
                <LeftToRightSkill label={skill.name} />
                <div className='dropicon'><i><img src="./static/logo/dropicon.svg" alt="icon" /></i></div>
              </div>
            ) : (
              <div className='skillright' key={index}>
                <div className='dropicon'><i><img src="./static/logo/dropicon.svg" alt="icon" /></i></div>
                <RightToLeftSkill label={skill.name} />
              </div>
            )
          ))}
        </div>
        <div className="linedrop"></div>
      </div>
    </>
  );
}

export default Skill;
