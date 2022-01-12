import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    const copyright = <FontAwesomeIcon icon={faCopyright} />
    return (
        <div className='footer-area py-5'>
            <div className="container d-flex align-items-center">
                <div className="row">
                    <p className='mb-0'>{copyright} Copyright 2022. All Rights are Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;