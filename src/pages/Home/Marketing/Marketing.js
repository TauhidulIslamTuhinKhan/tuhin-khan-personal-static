import React from 'react';
import { Link } from 'react-router-dom';
import creative5 from '../../../images/creative5.jpg'
import creative6 from '../../../images/creative6.jpg'
import creative3 from '../../../images/creative3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

const Marketing = () => {
    const searchplus = <FontAwesomeIcon icon={faSearchPlus} />
    return (
        <div className='all-creative'>
            <div className="row">
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
                <div className="col-lg-4">
                    <div className="img mb-4">
                        <img className='img-fluid' src={creative3} alt="" />
                        <div className="overlay">
                            <Link to='/home' className='search'>{searchplus}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketing;