import { ProductCardStyled } from "../Styles/ProductCard_style";

// Este el componente que muestra un producto, como una carta, le llegan por props todas las variables del componente padre Catalogue.js
const ProductCard = (props) => {
  return (
    <ProductCardStyled>
      <div className="card">
        <img
          src={props.thumbnail}
          alt="thumbnail"
          className="card-img"
          // Al realizar un click en la imagen, llama a una función llamada window.open, lo que hace es abrir el link del producto 
          // de mercadolibre, en otra pestaña.
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
          {/* Aca se hace uso de la función AddToCart, invocada al hacer click en el botón, lo que hace es añadir el producto al carrito. Esta función viene por props */}
          <button className="buttonAdd" onClick={() => props.addToCart()}>
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </ProductCardStyled>
  );
};

export default ProductCard;
