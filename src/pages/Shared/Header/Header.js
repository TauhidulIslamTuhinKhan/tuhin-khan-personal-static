import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo-removebg-preview.png'

import './Header.css'

const Header = () => {
    let activeStyle = {
        fontWeight: "bold",
        color: "red"
    };
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className="header-menu">
                <Container>
                    <NavLink to="/home">
                        <img className="img-fluid logo-image" src={logo} alt="" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='mobile-menu' />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className='ms-auto'>
                            <NavLink className="header-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/home">Home</NavLink>
                            <NavLink className="header-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/aboutme">About Me</NavLink>
                            <NavLink className="header-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/services">Services</NavLink>
                            <NavLink className="header-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/portfollio">Portfollio</NavLink>
                            <NavLink className="header-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/news">News</NavLink>
                            <NavLink className="header-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/contact">Contact</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
