import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import skills from "./json/skills.json";
import "./skill.css";

function SkillSets({ label, index, categories, isFocused }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div>
      <div
        ref={ref}
        className={`label-box ${
          index % 2 === 0 ? "left-to-right" : "right-to-left"
        }  ${inView ? "animate" : ""}`}
        style={{backgroundColor: isFocused ? "rgb(126, 140, 248)" : "rgb(226, 240, 248)"}}
      >
        {label}
      </div>
      <div style={{listStyleType: 'none', alignItems: index % 2 === 0 ? "flex-end" : "flex-start", display:"flex", justifyContent:"center", flexDirection:"column"}}>
        {isFocused && categories.map((category, i) => 
        <div key={i} style={{alignItems: index % 2 !== 0 ? "flex-end" : "flex-start", display:"flex", justifyContent:"center", flexDirection:"row", position: "relative",left: index % 2 === 0 ? "22px": "-22px" }}>
          {index % 2 !== 0 && (
            <div>
                <img src={category.img} alt="icon" style={{marginTop:"10px", width:"20px", height:"20px"}}/>
            </div>
          )}
            <li className='label-box-list'>{category.name}</li>
            {index % 2 === 0 && (
              <div>
                  <img src={category.img} alt="icon" style={{marginTop:"10px", width:"20px", height:"20px"}}/>
              </div>
            )}
        </div>
        )}
      </div>
    </div>
  );
}

function Skill() {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const skillListRef = useRef();

  useEffect(() => {
    const linedropElement = document.querySelector(".linedrop");
    const skillListElement = skillListRef.current;

    if (linedropElement && skillListElement) {
      const skillListHeight = skillListElement.clientHeight;
      linedropElement.style.width = `${skillListHeight - 20}px`;
    }
  }, []);

  const handleFocus = (index) => {
    setFocusedIndex(index);
    
  };
  const handleUnFocus = () => {
    setTimeout(() => {
        setFocusedIndex(null)
    }, 3500);
  }

  return (
    <>
      <div className="skillcontainer u-s-n">
        <h1>Skill Set</h1>
        <div className="skilllist" ref={skillListRef} onMouseLeave={handleUnFocus}>
          {skills.map((skill, index) => (
              <div
                className={index % 2 === 0 ? "skillleft" : "skillright"}
                key={index}
                onMouseEnter={() => handleFocus(index)}
                onClick={() => handleFocus(index)}
                >
                {index % 2 !== 0 && (
                  <div className="dropicon">
                    <i>
                      <img src="./static/logo/dropicon.png" alt="icon" />
                    </i>
                  </div>
                )}
                <SkillSets
                  label={skill.name}
                  categories={skill.category}
                  index={index}
                  isFocused={focusedIndex === index}
                />
                {index % 2 === 0 && (
                  <div className="dropicon">
                    <i>
                      <img src="./static/logo/dropicon.png" alt="icon" />
                    </i>
                  </div>
                )}
              </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skill;
