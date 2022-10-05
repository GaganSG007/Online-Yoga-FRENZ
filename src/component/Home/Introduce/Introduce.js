import React from 'react';
import './Introduce.css';
import introduce from '../../../image/home-yoga-introduce-image.png';

const Introduce = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="text-center p-5">
                <img src={introduce} alt=""/>
                <h1 className="mt-5">Hi! My name is Siri and I’m here to help you find the confidence you need to feel amazing in your body!</h1>
            </div>            
        </div>
    );
};

export default Introduce;