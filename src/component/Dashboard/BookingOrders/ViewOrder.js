import React from 'react';

const ViewOrder = ({order}) => {
    return (
        <div>
            <li>{order.orderDetails.email}</li>
        </div>
    );
};

export default ViewOrder;