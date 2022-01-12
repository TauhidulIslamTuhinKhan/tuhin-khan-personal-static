import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Typical from 'react-typical'

// import Sidebar from '../../Shared/Sidebar/Sidebar';
import './About.css'

const About = () => {
    const html = 95;
    const css = 85;
    const java_script = 65;
    const react_js = 55;

    return (
        <div className='about-area mt-5'>
            {/* <Sidebar></Sidebar> */}
            <div className="container">
                <div className="heading-text">
                    <h3>About Me</h3>
                    <p>Main Information About Me</p>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="about-img mb-5">
                            <div className="img">
                                <img className='img-fluid' src="https://i.ibb.co/f00hPRB/pexels-khalifa-waleed-761115.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-right-text">
                            <h5>I'm Tauhidul Islam and {' '}
                                <Typical
                                    className='type'
                                    steps={['Web Developer',
                                        2000,
                                        'Freelancer',
                                        2000,
                                        'UI/UX Designer',
                                        2000
                                    ]}
                                    loop={Infinity}
                                    wrapper="b"
                                />
                            </h5>
                            <p>Hi! My name is Tauhidul Islam. I am a Web Developer, and I'm very passionate and dedicated to my work. With 02 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
                            <div className="about-list d-flex">
                                <div className="d-flex">
                                    <ul>
                                        <li>Birthday :</li>
                                        <li>City :</li>
                                        <li>Study :</li>
                                        <li>Website :</li>
                                        <li>Phone :</li>
                                    </ul>
                                    <ul className='list-margin'>
                                        <li>07 October 1983</li>
                                        <li>Khulna, Bangladesh</li>
                                        <li>Manarat International University</li>
                                        <li>WWW.ABCDEFGH.com</li>
                                        <li>+880-1876-480061</li>
                                    </ul>
                                </div>
                                <div className="d-flex">
                                    <ul className='list-margin'>
                                        <li>Age :</li>
                                        <li>Interests :</li>
                                        <li>Degree :</li>
                                        <li>Mail :</li>
                                        <li>Twitter :</li>
                                    </ul>
                                    <ul className='list-margin'>
                                        <li>07 October 1983</li>
                                        <li>Khulna, Bangladesh</li>
                                        <li>Manarat International University</li>
                                        <li>WWW.ABCDEFGH.com</li>
                                        <li>+880-1876-480061</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="button-div mb-5">
                                <button className='button-primary'>Download CV</button>
                                <button className='button-primary'>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-bottom-area mb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="ps-3">
                                <h4>Some About My Abilities</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nihil quod tempora numquam inventore sequi, voluptas rerum perferendis! Iusto natus amet impedit cupiditate minima rerum laboriosam voluptatum alias perferendis distinctio neque est illo nulla, quasi esse, nemo earum quos eaque.</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-right-text">
                                <p>HTML - 03 years of exprience</p>
                                <ProgressBar variant="dark" now={html} label={`${html}%`} />
                                <p>CSS - 03 years of exprience</p>
                                <ProgressBar variant="dark" now={css} label={`${css}%`} />
                                <p>JavaScript - 03 years of exprience</p>
                                <ProgressBar variant="dark" now={java_script} label={`${java_script}%`} />
                                <p>React - 03 years of exprience</p>
                                <ProgressBar variant="dark" now={react_js} label={`${react_js}%`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;