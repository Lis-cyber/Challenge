import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ProductCard = ({id, title, price, currency_id, available_quantity, thumbnail, condition}) => {
  
  try {
    axios.get(`http//localhost:1337/products/${currency_id}`);
    
  } catch(err) {
    console.log(err);
  };



  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
        <img src={thumbnail} className="card-img-top" alt="thumbnail" />
        <div className="card-body">
          <Link to={`/products/${id}`}><h5 className="card-title">{title}</h5></Link>
          <p className="card-text">$ {price}</p>
          <p className="card-text">Available Quantity: {available_quantity}</p>
          <p className="card-text">Condition: {available_quantity}</p>
          <button className="button">Add To Cart</button>
        </div>
      </div>
    </div>  
  )
}

export default ProductCard;
