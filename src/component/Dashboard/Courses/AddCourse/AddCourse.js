import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}
const AddCourse = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const evenData = {
            title: data.title,
            price: data.price,
            duration: data.duration,
            image_url: imageURL
        };
        const uri = `https://fierce-ravine-06382.herokuapp.com/addCourse`;
        fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(evenData)
        })

        console.log(evenData);

    };


    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '0334c4afa89466293fef235bb0c031bf');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 d-flex " style={{height:"100vh"}}>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-group mt-5">
                            <input placeholder="Course Title" {...register("title")} class="form-control" />
                        </div>
                        <div class="form-group mt-5">
                            <input placeholder="Price" {...register("price")} class="form-control" />
                        </div>
                        <div class="form-group mt-5">
                            <input placeholder="Course Duration" {...register("duration")} class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlFile1" >Upload Your Product Image</label>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input name="exampleRequired" className="form-control w-75" type="file" onChange={handleImageUpload} accept="image/*" /><br />
                                <img src={imageURL} style={{ width: '100px', height: '100px', marginLeft: '30px' }} alt="" />
                                {
                                    imageURL === null && <div class="spinner-grow" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                }
                            </div>


                            <input type="submit" className="form-control btn btn-secondary" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddCourse;