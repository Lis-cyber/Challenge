import { ProductCardStyled } from "../Styles/ProductCard_style";

const ProductCard = (props) => {
  return (
    <ProductCardStyled>
      <div className="card">
        <img
          src={props.thumbnail}
          alt="thumbnail"
          className="card-img"
          onClick={() => window.open(props.permalink, "_blank")}
        />
        <div className="card-body">
          <p>_______________________________</p>
          <p className="card-title">{props.title}</p>
          <p className="card-text">
            <b>Price</b>: $ {Intl.NumberFormat("de-DE").format(props.price)}{" "}
            {props.currency_id}
          </p>
          <p className="card-text">
            <b>Condition</b>: {props.condition}
          </p>
          <p className="card-text">
            <b>Stock</b>: {props.available_quantity}
          </p>
          <button className="buttonAdd" onClick={() => props.addToCart()}>
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </ProductCardStyled>
  );
};

export default ProductCard;