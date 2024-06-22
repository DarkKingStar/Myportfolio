import React, { useRef,useState} from 'react';
import './contact.css';
import deatils from './json/details.json';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

function Contact() {
    const [valid, setValid] = useState(true);
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();
    const [ref, inView] = useInView({
        triggerOnce: false, // This will trigger the animation only once
        threshold: 0.5, // Adjust this value to control when the animation is triggered
    });


    const handleChangeEmail = (e) => {
        const value = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
        const isValid = emailRegex.test(value);
        setValid(isValid);
        if(value==''){
        setValid(true);
        }
    };
    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = {
            email: emailRef.current.value,
            name: nameRef.current.value,
            message: messageRef.current.value
        };
        console.log(formData);
    };
    return (
      <>
        <div
          ref={ref}
          className={`contactcontainer ${inView ? "visible" : ""}`}
        >
          <h1 className="u-s-n">Get in Touch</h1>
          <div className="contactinfo">
            <div className="map">
              <iframe
                src={deatils.maploactionURL}
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="messagebox">
              <input type="text" placeholder="Enter Your Email" onChange={handleChangeEmail} ref={emailRef}/>
            {!valid && <span style={{ color: 'red', fontSize:'9px', margin:0,padding:0}}>Please enter a valid email address</span>}
              <input type="text" placeholder="Enter Your Name" ref={nameRef}/>
              <textarea placeholder="Enter Your Message" ref={messageRef} />
              <button onClick={handleSubmit} className="send-btn" id={valid?'':'disable'} disabled={valid?false:true}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Contact;
