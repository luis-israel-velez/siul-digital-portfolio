import React from "react";
import './nav.css'
import {AiTwotoneHome, AiFillMessage} from "react-icons/ai"
import {FaUserAstronaut, FaGraduationCap} from "react-icons/fa"
import {GiLaptop, GiBookAura} from "react-icons/gi"
import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return(
        <nav>
            <a href="/#"
            onClick={() => setActiveNav('/#')}
            className={activeNav === '/#' ? 'active' : ''}><AiTwotoneHome/> </a>
            <a href="#skills"
            onClick={() => setActiveNav('#skills')}
            className={activeNav === '#skills' ? 'active' : ''}><GiLaptop/> </a>
            <a href="#experience"
            onClick={() => setActiveNav('#experience')}
            className={activeNav === '#experience' ? 'active' : ''}><GiBookAura/> </a>
            <a href="#portfolio"
            onClick={() => setActiveNav('#portfolio')}
            className={activeNav === '#portfolio' ? 'active' : ''}><FaGraduationCap/> </a>
            <a href="#about"
            onClick={() => setActiveNav('#about')}
            className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut/> </a>
            <a href="#contact"
            onClick={() => setActiveNav('#contact')}
            className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage/> </a>
        </nav>
    )
}

export default Nav

