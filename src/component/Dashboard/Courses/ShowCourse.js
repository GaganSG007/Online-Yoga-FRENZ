import React from 'react';
import './ShowCourse.css'

const ShowCourse = ({course}) => {
    console.log(course.image_url);
    return (
        <div className=" col-md-5 col-sm-12 p-2 m-2 d-flex shadow  border rounded bg-dark">
            <div className="d-flex justify-content-between align-items-center " >
                <div>
                <img src={course.image_url}  style={{ height:'120px'}} alt=""/>
                </div>
                <div className="text-center"  style={{width:'270px'}}>
                    <h4>{course.title}</h4>
                    <p>Price : {course.price}Rs</p>
                    <p>Course Duration: {course.duration} Minute</p>

                    <div className="d-flex">
                        <div className="btn btn-info btn-sm w-40 m-1">Edit</div>
                        <div className="btn btn-danger btn-sm w-40 m-1">Delete Course</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCourse;