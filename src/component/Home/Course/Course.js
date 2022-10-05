import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';
const Course = ({ course }) => {
    const {_id}=course;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="course-card mt-5">
                <div>
                    <div className="card-info"> 
                    <div className="shadow price-card">
                        <p className='price'>{ course.price + 'Rs'}</p>

                    </div>
                    <div className="ml-3 mt-3" style={{ position: 'absolute' }}>
                        <h6 style={{ padding: '10px', color: 'white', backgroundColor: 'grey' }} className="text-left"><small>{'Join:'} {34} {'Student'}</small></h6>
                        <h6 style={{ padding: '10px', color: 'white', backgroundColor: 'grey', marginTop: "-30px" }} className="text-center"><small>{'Duration:'} {course.duration} {'Minutes'}</small></h6>
                    </div>
                    </div>
                    <Link to={`/dashboard/book-list/${_id}`}><div className="card-img">
                        <img src={course.image_url} style={{ width: '95%' }} alt="" />
                    </div></Link>
                </div>
                <div >
                    <h2 className="text-center">{course.title}</h2>

                </div>
            </div>
        </div>
    );
};

export default Course;