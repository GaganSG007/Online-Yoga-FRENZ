import React from 'react';

const Booking = ({courseFind}) => {
    
    return (
        <div>
            <h3>Course Preview</h3>
            <form >
                <div className="form-group">
                    <input type="text" className="fofrm-control w-75 pl-2" value={courseFind.title} disabled/>
                </div>
                <div className="form-group">
                    <input type="text" className="fofrm-control w-75 pl-2" value={'$'+courseFind.price} disabled/>
                </div>
                <div className="form-group">
                    <input type="text" className="fofrm-control w-75 pl-2" value={courseFind.duration+' '+'minute'} disabled/>
                </div>
                <div className="form-group">
                    <img src={courseFind.image} className="w-75" alt=""/>
                </div>
            </form>
        </div>
    );
};

export default Booking;