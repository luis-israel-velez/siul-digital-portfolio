import React from "react"
import {FaLinkedin, FaGithubSquare} from "react-icons/fa"


const HeaderSocial = () => {
    return(
        <div className='header__social'>
            <a href="https://lindedin.com" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
        </div>
    )
}

export default HeaderSocial