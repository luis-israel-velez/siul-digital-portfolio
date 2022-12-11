import React from "react";
import './index.css'
import Header from './components/header/Header'
import Skills from "./components/skills/Skills";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer";

const App = () => {
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