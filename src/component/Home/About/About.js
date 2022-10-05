import React from 'react';
import aboutImg from '../../../image/home-yoga-about-image.jpg';
import './About.css'

const About = () => {
    return (
        <div className="row p-5">

    
            <div className="col-md-6 col-sm-12 abt-img" >
                <img style={{borderRadius:'100px 10px', width:'100%'}} src={aboutImg} alt="" />
            </div>              
            <div className="about-text col-md-6 col-sm-12 abt-txt">
                <p>As a coach I have been working with different clients for more than 10 years, helping them get closer to their individual goals in terms of leadership, stress management, creative potential, self-confidence, wellbeing, and happiness.
                To me, yoga is a practice on and off the mat. And on the other hand, coaching can benefit a lot from a holistic perspective as well as meditations to calm the nervous system and the mind and see more clearly.</p>
                <button className="btn-pasn">My Story And Passion</button>
            </div>
            
            
        </div>
    );
};

export default About;