import React from 'react';
// import { Link } from 'react-router-dom';
// import { ProdCard } from '../Styles/ProductCard_style';
// import styles from '../Styles/styles.css'

const ProductCard = (props) => {

  return (
    // <ProdCard>
    <div className="cardSize">
      <div className="Card" style={{width: "18rem"}}>
          <img src={props.thumbnail} className="card-img" alt="thumbnail" style={{ margin: "auto", width: "150px"}} />
        <div className="card-body">
          <p>______________________</p>
          {/* con un anchor, agregar link mercadolibre */}
          {/* <Link to={`//${id}`}><h5 className="card-title">{title}</h5></Link> */}
          <p className="card-title">{props.title}</p>
          <p className="card-text"> $ {props.price} {props.currency_id}</p>
          <p className="card-text"><b>Available Quantity</b>: {props.available_quantity}</p>
          <p className="card-text"><b>Condition</b>: {props.condition}</p>
          <button className="buttonAdd" onClick={() => props.addToCart()}><span>Add To Cart</span></button>
        </div>
      </div>
    {/* </ProdCard> */}
    </div>
  )
}

export default ProductCard;
