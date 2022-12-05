import React from "react";
import './contact.css'
import {GrMail} from 'react-icons/gr'

const Contact = () => {
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
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea type="message" row='7' placeholder="Your Message" required/>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact

//EmailJS -> 