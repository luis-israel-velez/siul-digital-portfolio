import React from "react";
import './header.css';
import CTA from './CTA'
import HEADSHOT from '../../assets/luis.png'
import HeaderSocial from "./HeaderSocial";

const Header = () => {
    return(
        <header>
            <div className="container header__container">
                <h5>
                    Welcome! My name is
                </h5>
                <h1>
                    Luis Velez
                </h1>
                <h5 className="text-light">
                    Chief Technology Officer/Engineer
                </h5>
                <CTA/>
                <HeaderSocial/>

                <div className="headshot">
                    <img src={HEADSHOT} alt="headshot" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header