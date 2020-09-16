import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

/**
* @author
* @function Header
**/

const Header = (props) => {

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
               <Link to ="/" className="navbar-brand">Admin Dashboard</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <NavLink to="/signin" className="nav-item">Log In</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;