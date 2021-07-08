import React  from 'react'; 
import AltLogoImage from '../images/myhealthpassport - white.png'


function Logo() {
    return(
        <a href="/">
            <img src={AltLogoImage} alt="AltLogoImage" className="logoImage"/>
        </a>
        
    )
}

export default Logo;