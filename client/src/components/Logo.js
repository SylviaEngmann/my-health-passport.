import React  from 'react'; 
import LogoImage from '../images/myhealthpassport - blue.png'


function Logo() {
    return(
        <a href="/">
            <img src={LogoImage} alt="LogoImage" className="logoImage"/>
        </a>
        
    )
}

export default Logo;