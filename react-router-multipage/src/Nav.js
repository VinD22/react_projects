import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink activeClassName="active" exact to="">Component One</NavLink>
            <NavLink activeClassName="active" to="/two">Component Two</NavLink>
        </nav>
    )
}

export default Nav
