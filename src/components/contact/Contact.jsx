import React, { useRef, useState } from "react";
import './contact.css';
import {GrMail} from 'react-icons/gr';
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef(); 

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_KEY)
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });

    };                        
    return(
        <section id="contact"> 
            <h5>Let's Talk</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <GrMail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>luis.israel.velez@gmail.com</h5>
                        <a href="mailto:luis.israel.velez@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <form method="post" onSubmit={sendEmail} ref={form} id="contact-form">
                    <input type="text" name='name' id='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' id='email' placeholder='Your Email' required />
                    <textarea type="message" row='7' name='message' id='message' placeholder="Your Message" required/>
                    <button type="submit" className="btn btn-primary" >Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact

//EmailJS -> 