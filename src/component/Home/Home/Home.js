import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import Introduce from '../Introduce/Introduce';
import About from '../About/About'
import Welcome from '../WelcomePage/WelcomePage'
import YogaCourses from '../YogaCourses/YogaCourses';
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Introduce></Introduce>
            <About></About>
            <Welcome></Welcome>
            <YogaCourses></YogaCourses>
            <Footer></Footer>
        </div>
    );
};

export default Home;