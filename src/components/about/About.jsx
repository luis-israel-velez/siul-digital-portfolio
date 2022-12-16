import React from "react";
import './about.css'
import ME from "../../assets/family.jpg"
import {FaUniversity, FaHandshake} from "react-icons/fa"
import {DiGoogleAnalytics} from "react-icons/di"

const About = () => {
    return(
        <section id="about" className="hidden">
            <h5>More information</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaUniversity className="about__icon"/>
                            <h5>Experience</h5>
                            <small>10+ Years</small>
                        </article>
                        <article className="about__card">
                            <DiGoogleAnalytics className="about__icon"/>
                            <h5>Projects</h5>
                            <small>50+ Completed</small>
                        </article>
                        <article className="about__card">
                            <FaHandshake className="about__icon"/>
                            <h5>Partners</h5>
                            <small>25+ Partnerships</small>
                        </article>
                    </div>
                    <p>Passionate leader & engineer with a proven record of building highly productive and result oriented tech teams by interviewing and identifying highly motivated people while mentoring and expanding the current team talent. Successfully executed legacy to cloud global migration projects, as well as building new applications from the beginning, with an emphasis on improving performance while minimizing cost. Solutions were built to be highly scalable and resilient to adapt to ever growing business needs.</p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Meet
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About