import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
        //console.log(props);
        const {product, handleAddProduct}=props;
        const {img,name,seller,price,stock,key}=product;
    return (
        <div className="product">
            <div className="">
                <img src={img} alt=""/>
            </div>
            <div className="">
                 <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                 <br/>
                 <small>by:{seller}</small>
                 <p>price: ${price}</p>
                 <br/>
                 <small>only {stock} left in stock- order soon</small>
                 { props.showAddToCart===true && <button className="main-btn"
                        //onClick={()=>props.handleAddProduct(props.product)} 
                        //props is being distructured.
                        onClick={()=>handleAddProduct(product)}
                        >
                     <FontAwesomeIcon icon={faShoppingCart} />add to cart </button>}
            </div>
        </div>
    );
};

export default Product;