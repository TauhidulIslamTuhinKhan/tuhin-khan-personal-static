import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'

const Contact = () => {
    const markerIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />
    const envelopIcon = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <div className='contact-area mb-5 mt-5'>
            <div className="container">
                <div className="heading-text mb-5">
                    <h3>Contact Me</h3>
                    <p>Get In Touch With Me</p>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className='d-flex mb-3'>
                            <div className='icon-div'>
                                <span>{markerIcon}</span>
                            </div>
                            <div className='text-color'>
                                <small>OFFICE</small>
                                <h5>Satiany, Phultala, Khulna, Bangladesh</h5>
                            </div>
                        </div>
                        <div className='d-flex mb-3'>
                            <div className='icon-div'>
                                <span>{phoneIcon}</span>
                            </div>
                            <div className='text-color'>
                                <small>PHONE</small>
                                <h5>+880-1876-480061</h5>
                            </div>
                        </div>
                        <div className='d-flex mb-3'>
                            <div className='icon-div'>
                                <span>{envelopIcon}</span>
                            </div>
                            <div className='text-color'>
                                <small>EMAIL</small>
                                <h5>tuhin0411@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-12">
                        <div className='contact-form'>
                            <form className="d-flex flex-column" >
                                <input type="text" id="name" name="name" placeholder='Your Name' />
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder='Your email'
                                />
                                <textarea
                                    id="message"
                                    name="message"
                                    cols="30" rows="3"
                                    placeholder='Your Message'
                                />
                                <button className="button-primary" type="submit">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;