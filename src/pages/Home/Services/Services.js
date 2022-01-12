import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faShareAlt, faLayerGroup, faSignal } from '@fortawesome/free-solid-svg-icons'
import { faChrome, faAutoprefixer } from '@fortawesome/free-brands-svg-icons'
import './Services.css'

const Services = () => {
    const webdesign = <FontAwesomeIcon icon={faLaptopCode} />
    const socialmedia = <FontAwesomeIcon icon={faShareAlt} />
    const photography = <FontAwesomeIcon icon={faChrome} />
    const branding = <FontAwesomeIcon icon={faLayerGroup} />
    const marketing = <FontAwesomeIcon icon={faSignal} />
    const illustrator = <FontAwesomeIcon icon={faAutoprefixer} />
    return (
        <div className='services-area mb-5 mt-5'>
            <div className="container">
                <div className="heading-text">
                    <h3>Amazing Services</h3>
                    <p>Meet Our Amazing Services</p>
                </div>
                <div className="row service-row">
                    <div className="col-lg-4">
                        <Card className='service-card'>
                            <Card.Body>
                                <span className='service-icon'>{webdesign}</span>
                                <Card.Title>Web Design</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet, debitis maiores iure exercitationem modi omnis repudiandae quis nobis quasi fuga, dolores est dolorum ad?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className='service-card'>
                            <Card.Body>
                                <span className='service-icon'>{socialmedia}</span>
                                <Card.Title>Social Media</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet, debitis maiores iure exercitationem modi omnis repudiandae quis nobis quasi fuga, dolores est dolorum ad?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className='service-card'>
                            <Card.Body>
                                <span className='service-icon'>{photography}</span>
                                <Card.Title>Photography</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet, debitis maiores iure exercitationem modi omnis repudiandae quis nobis quasi fuga, dolores est dolorum ad?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className='service-card'>
                            <Card.Body>
                                <span className='service-icon'>{branding}</span>
                                <Card.Title>Branding</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet, debitis maiores iure exercitationem modi omnis repudiandae quis nobis quasi fuga, dolores est dolorum ad?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className='service-card'>
                            <Card.Body>
                                <span className='service-icon'>{marketing}</span>
                                <Card.Title>Marketing</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet, debitis maiores iure exercitationem modi omnis repudiandae quis nobis quasi fuga, dolores est dolorum ad?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className='service-card'>
                            <Card.Body>
                                <span className='service-icon'>{illustrator}</span>
                                <Card.Title>Illustrator</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet, debitis maiores iure exercitationem modi omnis repudiandae quis nobis quasi fuga, dolores est dolorum ad?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;