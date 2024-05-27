import './about.css';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import socials from './json/socials.json';
import details from './json/details.json';

const SocialMediaIcons = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`socialmedia u-s-n ${inView ? 'slide-in' : ''}`}
    >
      {socials.map((item, index) => (
           <i key={index} title={item.name}><a href={item.link} target='_blank'><img src={item.logo} alt={item.name}/></a></i>
          ))}
    </div>
  );
}

const SlideInButton = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <button ref={ref} className={`hiremebtn ${inView ? 'left-slide-in' : ''}`}>
      <a href='#contact'>Hire me</a>
    </button>
  );
}

const FadeInImage = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`photo ${inView ? 'fade-in' : ''}`}>
      <figure> 
        <img className="myphoto" src={details.photoURL} alt='my pic' />
      </figure>
    </div>
  );
}

const SlideInFromLeft = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`para ${inView ? 'slide-in' : ''}`}>
      <i className='star'><img src="./static/logo/star.svg" alt="star"/></i>
      <p className='u-s-n'>
        {details.desc}
      </p>
    </div>
  );
};

const TypingAnimation = ({ delay, text, len}) => {
  const [currentText, setCurrentText] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      let index = 0;
      setTimeout(() => {
        const typingInterval = setInterval(() => {
          setCurrentText((prev) => prev + text[index-1]);
          index++;
          if (index === text.length) {
            clearInterval(typingInterval);
          }
          
        }, 60);
      },delay);
     
    }else{
      setCurrentText('');
    }
  }, [inView,text]);

  return <div ref={ref}>{currentText.substring(0,len)}</div>;
};

function About(){
    return(<>
    <div className="abtcontainer">
        <div className="flexcontainer">
            <div className='details u-s-n'>
              <div style={{height:"160px"}}>
            <h3>
                <TypingAnimation delay={0} text="Hi," len="3" />
            </h3>
            <h1>
                <TypingAnimation delay={60*3+60} text={`I'm ${details.name}`} len={`${Number(details['name-size'])+4}`}/>
            </h1>
            <h2>
                <TypingAnimation delay={60*3+60*Number(details['name-size'])+4+60} text={details.Qual} len={details['Qual-size']}/>
            </h2>
              </div>
            <SlideInButton />
            <a
            href={details.ResumeURL}
            target="_blank"
            className="resumelink fade-in"
            >
            See Resume
            </a>
            <SlideInFromLeft />
            </div>
            <FadeInImage />
            <SocialMediaIcons />
        </div>

    </div>
    </>)
}
export default About;