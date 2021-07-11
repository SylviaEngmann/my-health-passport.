import React from 'react';
import AltLogo from './AltLogo';
import { NavLink } from 'react-router-dom';
import  '../App.css';


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
    )
  }
  
  export default SideNav;
  