import React from 'react';
import { Link } from 'react-router-dom';
import creative1 from '../../../images/creative1.jpg'
import creative2 from '../../../images/creative2.jpg'
import creative3 from '../../../images/creative3.jpg'
import creative4 from '../../../images/creative4.jpg'
import creative5 from '../../../images/creative5.jpg'
import creative6 from '../../../images/creative6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import './All.css'

const All = () => {
    const searchplus = <FontAwesomeIcon icon={faSearchPlus} />
    return (
        <div className='all-creative'>
            <div className="row">
                <div className="col-lg-4">
                    <div className="img mb-4">
                        <img className='img-fluid' src={creative1} alt="" />
                        <div className="overlay">
                            <Link to='/home' className='search'>{searchplus}</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="img mb-4">
                        <img className='img-fluid' src={creative2} alt="" />
                        <div className="overlay">
                            <Link to='/home' className='search'>{searchplus}</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="img mb-4">
                        <img className='img-fluid' src={creative3} alt="" />
                        <div className="overlay">
                            <Link to='/home' className='search'>{searchplus}</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="img mb-4">
                        <img className='img-fluid' src={creative4} alt="" />
                        <div className="overlay">
                            <Link to='/home' className='search'>{searchplus}</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="img mb-4">
                        <img className='img-fluid' src={creative5} alt="" />
                        <div className="overlay">
                            <Link to='/home' className='search'>{searchplus}</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="img mb-4">
                        <img className='img-fluid' src={creative6} alt="" />
                        <div className="overlay">
                            <Link to='/home' className='search'>{searchplus}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default All;