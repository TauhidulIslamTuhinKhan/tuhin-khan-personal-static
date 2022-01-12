import React from 'react';
import { Card } from 'react-bootstrap';
import news1 from '../../../images/news1.png'
import news2 from '../../../images/news2.png'
import news3 from '../../../images/news3.png'
import './News.css'

const News = () => {
    return (
        <div className='news-area mt-5 mb-5 pt-5 pb-5'>
            <div className="container">
                <div className="heading-text mb-5">
                    <h3>Latest News</h3>
                    <p>Check Out Our Latest News</p>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Card>
                            <Card.Img variant="top" src={news1} />
                            <Card.Body>
                                <p>January 10, 2022</p>
                                <Card.Title>How to Create Great Business</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat error corrupti eum saepe hic, quae dolorum modi corporis molestiae repudiandae maxime delectus natus voluptatem?
                                </Card.Text>
                                <button className="button-primary">Read More</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card>
                            <Card.Img variant="top" src={news2} />
                            <Card.Body>
                                <p>January 10, 2022</p>
                                <Card.Title>How to Create Great Business</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat error corrupti eum saepe hic, quae dolorum modi corporis molestiae repudiandae maxime delectus natus voluptatem?
                                </Card.Text>
                                <button className="button-primary">Read More</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card>
                            <Card.Img variant="top" src={news3} />
                            <Card.Body>
                                <p>January 10, 2022</p>
                                <Card.Title>How to Create Great Business</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat error corrupti eum saepe hic, quae dolorum modi corporis molestiae repudiandae maxime delectus natus voluptatem?
                                </Card.Text>
                                <button className="button-primary">Read More</button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;