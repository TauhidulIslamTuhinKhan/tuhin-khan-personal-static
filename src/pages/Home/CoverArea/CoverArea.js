import React from 'react';
import Typical from 'react-typical'
import './CoverArea.css'

const CoverArea = () => {
    return (
        <div className='cover-area'>
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
                <div className="img ">
                    <img className='img-fluid tuhin-image' src="https://i.ibb.co/9NvkFrn/tkpng1.png" alt="" />
                </div>
                <h2 className='name-text'>Tauhidul <span className='color-text'>Islam</span> </h2>
                <p>
                    I'm a {' '}
                    <Typical
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
                </p>
            </div>
        </div>
    );
};

export default CoverArea;