import React from "react";
import './portfolio.css'
import DIAG1 from '../../assets/gcpdiagram.png'


const myData = [
    {
        id: 1,
        image: DIAG1,
        title: 'Enter title here',
        github: "https://github.com"
    },
    {
        id: 2,
        image: DIAG1,
        title: 'Enter title here',
        github: "https://github.com"
    },
    {
        id: 3,
        image: DIAG1,
        title: 'Enter title here',
        github: "https://github.com"
    }
]

const Portfolio = () => {
    return(
        <section id="portfolio">
            <h2>Past Experience</h2>

            <div className="container portfolio__container">
                {
                    myData.map(({id, image, title,github}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt="" />
                                </div>
                                <h3> {title} </h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target='__blank'>Github</a>
                                    <a href={github} className="btn btn-primary" target='__blank'>Anything else?</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio