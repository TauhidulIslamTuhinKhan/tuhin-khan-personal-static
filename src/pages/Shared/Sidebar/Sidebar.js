import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons'
import './Sidebar.css'


const Sidebar = () => {
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const linkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
    const behanceIcon = <FontAwesomeIcon icon={faBehance} />
    let activeStyle = {
        fontWeight: "bold",
        color: "red"
    };
    return (
        <div className='side-bar'>
            <div className='d-flex justify-content-center align-items-center pt-5'>
                <NavLink to="/home">
                    <img className="img-fluid side-logo-image" src={logo} alt="" />
                </NavLink>
            </div>
            <hr />
            <div className="side-bar-menu">
                <NavLink className="side-bar-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/home">Home</NavLink>
                <NavLink className="side-bar-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/aboutme">About Me</NavLink>
                <NavLink className="side-bar-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/services">Services</NavLink>
                <NavLink className="side-bar-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/portfollio">Portfollio</NavLink>
                <NavLink className="side-bar-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/news">News</NavLink>
                <NavLink className="side-bar-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="/contact">Contact</NavLink>
            </div>
            <div className="social-icon">
                <span>{facebookIcon}</span>
                <span>{twitterIcon}</span>
                <span>{linkedinIcon}</span>
                <span>{instagramIcon}</span>
                <span>{behanceIcon}</span>
            </div>
        </div>
    );
};

export default Sidebar;