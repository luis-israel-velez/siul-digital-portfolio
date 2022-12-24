import React from "react";
import './index.css'
import { useEffect } from "react";
import Header from './components/header/Header'
import Skills from "./components/skills/Skills";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer";



const App = () => {

    useEffect(() => {
        const callback = (entries) => {
            entries.forEach((entry) => {
                //console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        };
        
        const options = {}
        
        const observer = new IntersectionObserver(callback, options);
        
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    }, [])
    
    return(
        <>
            <Header />
            <Nav />
            <Skills />
            <Experience />
            {/*<Portfolio /> */}
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default App