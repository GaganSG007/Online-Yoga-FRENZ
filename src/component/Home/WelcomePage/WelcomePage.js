import React from 'react';
import './WelcomePage.css';
import welcomeImg from '../../../image/home-yoga-welcome-image.png';
import welcomeImg2 from '../../../image/home-yoga-welcome-image-02.png';

const WelcomePage = () => {
    return (
        <div className="WelcomePage">
            <div className="WelcomePage container">
                <div className="text-center pt-3">
                    <h1>What Happens When You <br /> Become a Yoga Health Coach?</h1>
                </div>
                <div className="row align-items-center mt-5">
                    <div className="col-md-6 col-sm-12 p-5">
                        <div >
                            <div className="d-flex align-items-center">
                                <h1 style={{ height: '60px', width: '140px', border: '1px solid #950740', borderRadius: '50%', marginRight: '50px' }} className="text-center">1</h1>
                                <div>
                                    <h3>Your personal habits & health evolve.</h3>
                                    <p>Over the past two decades, habit coaching has become a must-have for people wanting to evolve their personal health.
                    </p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="d-flex align-items-center">
                                <h1 style={{ height: '60px', width: '160px', border: '1px solid #950740', borderRadius: '50%', marginRight: '50px' }} className="text-center">2</h1>
                                <div>
                                    <h3>Individual approach. No fixed terms.</h3>
                                    <p>Yoga Life Coach training program is based on the ancient principles of the science of yoga, contemporised with modern coaching techniques.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={welcomeImg} className="wcimg" alt="" />
                    </div>
                </div>


                <div className="row align-items-center mt-5">
                    <div className="col-md-6 col-sm-12 ">
                        <img src={welcomeImg2} className="wcimg" alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12 mt-5">
                        <div >
                            <div className="d-flex align-items-center">
                                <h1 style={{ height: '60px', width: '120px', border: '1px solid #CF6E52', borderRadius: '50%', marginRight: '50px' }} className="text-center">3</h1>
                                <div>
                                    <h3>Yoga Life Coach is a proven step-by-step </h3>
                                    <p>Over the past two decades, habit coaching has become a must-have for people wanting to evolve their personal health.</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="d-flex align-items-center">
                                <h1 style={{ height: '60px', width: '160px', border: '1px solid #CF6E52', borderRadius: '50%', marginRight: '50px' }} className="text-center">4</h1>
                                <div>
                                    <h3>Yoga can help you build it up!</h3>
                                    <p>This training program is an integrated view of health and well being looking at the physical, mental, emotional and spiritual aspects to create greater impact in your clients life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default WelcomePage;