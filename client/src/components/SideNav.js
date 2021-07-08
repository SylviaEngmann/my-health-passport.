import React from 'react';
import AltLogo from './AltLogo';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import  '../App.css';
import AltLogoImage from '../images/myhealthpassport - white.png'


function SideNav() {
    return (
        <nav>
          <AltLogo />
                <ul>
                    <li>
                        <NavLink to="/dashboard">OVERVIEW</NavLink>
                    </li>
                    <li>
                        <NavLink to="/appointments">APPOINTMENTS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">PROFILE</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings">SETTINGS</NavLink>
                    </li>
                </ul>
            </nav>
 

      // <div>
      //   <Navbar collapseOnSelect expand="sm" className="sideNav">
      //     <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      //     <Navbar.Collapse id="responsive-navbar-nav">
      //       <Nav>
      //             <NavLink to="/">
      //               <img src={AltLogoImage} alt="AltLogoImage" className="logoImage"/>
      //             </NavLink>
      //             <Nav.Link to="/dashboard">OVERVIEW</Nav.Link>
      //             <Nav.Link to="/appointments">APPOINTMENTS</Nav.Link>
      //             <Nav.Link to="/profile">PROFILE</Nav.Link>
      //             <Nav.Link to="/settings">SETTINGS</Nav.Link>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Navbar>
      // </div>
    )
  }
  
  export default SideNav;
  