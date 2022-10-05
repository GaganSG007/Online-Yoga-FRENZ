import React, { useEffect, useState } from 'react';
import './YogaCourses.css';
import Course from '../Course/Course';

const YogaCourses = () => {
    const [courses, setCourses]=useState([]);
    useEffect(()=>{
        fetch('https://fierce-ravine-06382.herokuapp.com/courses')
        .then(response => response.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1 className="text-center mt-4 p-3">The #1 Coaching Program for Yoga</h1>
            <div className="row container d-flex justify-content-center m-auto ">
                {
                    courses.map((course => <Course course={course} key={course._id}></Course>))
                }

            </div>
            <div style={{margin:'auto', marginTop:'30px' , width:'300px'}}>
                <button className="btn-vc">View all Courses</button>
            </div>
        </div>
    );
};

export default YogaCourses;