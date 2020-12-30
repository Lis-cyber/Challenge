import React from 'react';
import { ProdCard } from '../Styles/ProductCard_style'

const ProductCard = (props) => {

  return (
    <ProdCard>
          <div className="card">
              <img src={props.thumbnail} className="card-img" alt="thumbnail"  />
            <div className="card-body">
              <p>___________________________________</p>
              {/* con un anchor, agregar link mercadolibre */}
              {/* <Link to={`//${id}`}><h5 className="card-title">{title}</h5></Link> */}
              <p className="card-title">{props.title}</p>
              <p className="card-text"> $ {props.price} {props.currency_id}</p>
              <p className="card-text"><b>Available Quantity</b>: {props.available_quantity}</p>
              <p className="card-text"><b>Condition</b>: {props.condition}</p>
              <button className="buttonAdd" onClick={() => props.addToCart()}><span>Add To Cart</span></button>
            </div>
          </div>
    </ProdCard>
  )
}

export default ProductCard;
