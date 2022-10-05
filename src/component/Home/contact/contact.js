import React from 'react'
import Navbars from '../Navbar/Navbar';
import ContactUs from './contactus/contactus';
import Footer from '../Footer/Footer';
import 'bootstrap';
import 'react-bootstrap';
import './contactus/contactus.css';

const Contact = () => {
    
    return (
        <div>
            <Navbars></Navbars>
            <ContactUs></ContactUs>
            <br></br>
            <Footer></Footer>
        </div>
    );
};

export default Contact;