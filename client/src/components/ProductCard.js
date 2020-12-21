import React from 'react';
// import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  
  const regex = /-I./;

  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
        <p>{props.title}</p>
        <img src={props.thumbnail.replace(regex, "-O.")} className="card-img-top" alt="thumbnail" style={{ margin: "auto", width: "100px"}} />
        <div className="card-body">
          {/* <Link to={`//${id}`}><h5 className="card-title">{title}</h5></Link> */}
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"> $ {props.price} {props.currency_id}</p>
          <p className="card-text">Available Quantity: {props.available_quantity}</p>
          <p className="card-text">Condition: {props.condition}</p>
          <button className="button">Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
