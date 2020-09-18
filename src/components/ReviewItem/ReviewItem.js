import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const { name, price, quantity,key } = props.product;
    const style={borderBottom:"1px solid gray", padding: "20px"};
    return (
        <div style={style} className="review-item">
            <h6>{name}</h6>
            <p>Quantity: {quantity}</p>
            <p>Price: $ {price}</p>
            <br/>
            <button 
            className="main-btn"
            onClick={()=>props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;