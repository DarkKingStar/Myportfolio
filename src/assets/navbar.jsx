import React, { useRef } from 'react';
import './navbar.css';
import details from './json/details.json';

function Navbar(){
    return (
      <>
        <div className="navcontainer u-s-n">
          <nav>
            <div className="heading">
              <span className="logo">
                <b>{details.initial}</b>
              </span>
              <div className="brandName">
                <h2 className="theName">{details.name}</h2>
                <p className="title">Portfolio</p>
              </div>
            </div>
            <div className="navigator">
              <ul className='menu'>
                <li><a href='#about'>About Me</a></li>
                <li><a href='#skill'>My Skills</a></li>
                <li><a href='#project'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
              </ul>
            </div>
            <div className='resume'>
                <button className='resume-btn'>
                  <a style={{color:"inherit",textDecoration:"none"}} 
                  target='_blank' 
                  href={details.ResumeURL}>
                  Resume
                  </a>
                </button>
            </div>
          </nav>
        </div>
      </>
    );
}
export default Navbar;