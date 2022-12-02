import React from "react";
import './index.css'
import Header from './components/header/Header'
import Skills from "./components/skills/Skills";
import './components/portfolio/Portfolio'
import './components/experience/Experience'
import './components/about/About'
import './components/hobbies/Hobbies'
import './components/nav/Nav'
import './components/footer/Footer'

const App = () => {
    return(
        <>
            <Header />
            <Skills />
        </>
    )
}

export default App