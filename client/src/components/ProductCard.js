import React from 'react';
import { ProdCard } from '../Styles/ProductCard_style'

const ProductCard = (props) => {

  
  return (
    <ProdCard>
          <div className="card">
              <img src={props.thumbnail} alt="thumbnail" className="card-img" onClick = {() => window.location.href = props.permalink}
              />
            <div className="card-body">
              <p>_______________________________</p>
              <p className="card-title">{props.title}</p>
              <p className="card-text"><b>Price</b>: $ {Intl.NumberFormat('de-DE').format(props.price)} {props.currency_id}</p>
              <p className="card-text"><b>Condition</b>: {props.condition}</p>
              <p className="card-text"><b>Stock</b>: {props.available_quantity}</p>
              <button className="buttonAdd" onClick={() => props.addToCart()}><span>Add To Cart</span></button>
            </div>
          </div>
    </ProdCard>
  )
}

export default ProductCard;
