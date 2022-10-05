import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ViewOrder from './ViewOrder';



const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}
const BookingOrders = () => {
    const [allOrders, setAllOrders]=useState(null);

    useEffect(()=>{
        fetch('https://fierce-ravine-06382.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    }, [])
    
    console.log(allOrders);
    return (
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                     <Sidebar></Sidebar>
                </div>
                <div className="col-md-10  p-5 " style={{height:"100vh"}}>
                   {
                       allOrders ?allOrders.map(order=><ViewOrder order={order}></ViewOrder>):''
                   }
                </div>

            </div>
    );
};

export default BookingOrders;