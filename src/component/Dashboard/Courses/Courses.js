import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ShowCourse from './ShowCourse';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}
const Courses = () => {
    const [courses, setCourses]=useState([]);
    useEffect(()=>{
        fetch('https://fierce-ravine-06382.herokuapp.com/courses')
        .then(response => response.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-2 col-sm-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-9" style={{backgroundColor: '#282C34 ', color: '#61DAFB'}}>
                <div className="row d-flex justify-content-around shadow ml-2 col-md-12 col-sm-12">
                    {
                        courses.map((course => <ShowCourse course={course} key={course._id}></ShowCourse>))
                    }
                </div>
            </div>
        </div>


    );
};

export default Courses;