import React from 'react';


const Cart = (props) => {
    const cart=props.cart;
    console.log(cart)
;    //const total=cart.reduce((total,prd)=>total+prd.price,0)
    let total=0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total=total+product.price*product.quantity;
    }
    let shipping=0;
    if(total>40){
        shipping=0;
        }
    else if(total>15){
        shipping=4.99;
        }
    else if(total>0){
        shipping=12.33;
        }
    const tax=total/10;
    const formatNumber=num=>{
        const result=num.toFixed(2);
        return Number(result);
    }
    return (
        <div>
            <h3 style={{color: 'green', border: '2px solid green', margin: '10px',padding: '10px'}}>Order summary</h3>
            <p>items order: {formatNumber(cart.length)}</p>
            <p>product price: $ {formatNumber(total)}</p>
            <small>shipping cost: $ {formatNumber(shipping)}</small>
            <p>tax+vat: $ {formatNumber(tax)}</p>
            <p>total price: $ {formatNumber(total+shipping+tax)}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;