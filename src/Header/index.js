import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation } from './style'
function Header() {
    return (
        <Navigation>
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/About" exact>About</NavLink>
            </li>
        </Navigation>
    )
}

export default Header;