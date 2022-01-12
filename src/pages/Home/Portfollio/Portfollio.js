import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'


import './Portfolio.css'

const Portfollio = () => {
    const quote = <FontAwesomeIcon icon={faQuoteLeft} />
    let activeStyle = {
        fontWeight: "bold",
        color: "red"
    };

    return (
        <div className='portfollio-area mt-5 mb-5'>
            <div className="container mb-5">
                <div className="heading-text">
                    <h3>Creative Works</h3>
                    <p>Check Out My latest Creative Works</p>
                </div>
                <div>
                    <Nav className='me-auto mb-4'>
                        <NavLink className="dashboard-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="all">All</NavLink>
                        <NavLink className="dashboard-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="design">Design</NavLink>
                        <NavLink className="dashboard-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="marketing">Marketing</NavLink>
                        <NavLink className="dashboard-text" style={({ isActive }) => isActive ? activeStyle : undefined} to="development">Development</NavLink>
                    </Nav>

                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>
            <div className="ceo-message">
                <div className="container text-center">
                    <span className='quote-icon'>{quote}</span>
                    <q className='message'>Nobarun team are easy to work and helped me <br /> make amazing websites in a short amount of <br /> time. Thanks guys for works.</q>
                    <h5>Tuhin Khan, CEO and Founder</h5>
                </div>
            </div>
            <div className="container achivement mt-5">
                <div className="row text-center mt-5">
                    <div className="col-lg-3 staright-line">
                        <span>100K</span>
                        <p>Global Customers</p>
                    </div>
                    <div className="col-lg-3 staright-line">
                        <span>63</span>
                        <p>Years of Exprience</p>
                    </div>
                    <div className="col-lg-3 staright-line">
                        <span>100</span>
                        <p>Team Expert</p>
                    </div>
                    <div className="col-lg-3">
                        <span>50</span>
                        <p>Awards & Honors</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfollio;