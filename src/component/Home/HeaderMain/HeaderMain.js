import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main>
            <div style={{ height:'600px'}} className="headerBgImg d-flex align-items-center justify-content-center">
                <div className="">
                    <h1>Hello, I'm Siri!</h1>
                    <h2 className="text-white">I wish to make the world healthier and happier for all</h2>
                    <button style={{backgroundColor:'#FF544A', color:'#fff', borderRadius:'20px', padding:'10px 20px'}} className="btn ">Get Started</button>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;