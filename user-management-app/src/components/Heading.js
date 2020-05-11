import React from 'react'

import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from "reactstrap"

export const Heading = () => {
    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand href="/">User Management</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link to="/add" className="btn btn-primary">Add User</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

