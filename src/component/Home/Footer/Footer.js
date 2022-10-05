import React from 'react';
import '../Footer/Footer.css'
const Footer = () => {
    return (
        <div className="fd">
            <div className="row mt-5">
                <div className="col-md-3 col-sm-3 m-auto">
                    <div>
                        <h2 className='text-center'>Quick Links</h2>
                        <div className='text-center'>
                            <a href='#' className='ql-link'><h5>About Us</h5></a>
                            <a href='#'className='ql-link'><h5>Portfolio</h5></a>
                            <a href='#'className='ql-link'><h5>Contact Us</h5></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 m-auto">
                    <div>
                        <h2 className='text-center'>Follow Me on</h2>
                        <div className='text-center'>
                        <a href='#' className='ql-link'><h5>Facebook</h5></a>
                        <a href='#' className='ql-link'><h5>Twitter</h5></a>
                        <a href='#' className='ql-link'><h5>Instagram</h5></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 m-auto">
                    <div>
                        <h2 className='text-center'>Information</h2>
                        <div className='text-center'>
                        <a href='#' className='ql-link'><h5>Privacy Policy</h5></a>
                        <a href='#' className='ql-link'><h5>Shipping & Returns</h5></a>
                        <a href='#' className='ql-link'><h5>Contact</h5></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;