import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import { UserContext } from '../../../App';
import './UserDashboard.css'


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}
const UserDashBoard = () => {
    

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                     <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 d-flex ">
                    <div className="col-md-6">
                        

                        


                    </div>

                </div>

            </div>
        </section>
    );
};

export default UserDashBoard;