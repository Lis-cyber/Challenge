// Se importa el componente ProductCard.js, debido a que el componente Catalogue.js, renderizará varios componentes ProductCard.js
import ProductCard from "./ProductCard";
import { FeaturesStyled } from "../Styles/Features_styles";
import { CatalogueStyled } from "../Styles/Catalogue_style";
import gifError from "../Styles/img/gif2_404.gif";

// Se crea Catalogue, con parámetros products y addToCart que son pasadas por props desde el componente padre, que es Features.js
function Catalogue({ products, addToCart, error }) {
  return (
    <FeaturesStyled>
      {error ? (
        <div>
          <h5 className="notFound">Ops!!! Product not found!</h5>
          <h5 className="notFound">Search again!</h5>
          <img src={gifError} alt="gift_404" className="error"></img>
        </div>
      ) : (
        <CatalogueStyled>
          {products.map((product) => {
            return (
              <ProductCard
                // Aca se colocan como props, todo lo que traemos del back
                key={product.id}
                title={product.title} // Este es el nombre del producto
                price={product.price} // Este es el precio del producto
                currency_id={product.currency_id} // Esto es la moneda del producto, ejemplo ARS
                available_quantity={product.available_quantity} // Esto es la cantidad disponible para comprar del producto
                thumbnail={product.thumbnail} // Esto es la imagen del producto
                condition={product.condition} // Esta es la condición del producto, ya sea nuevo o usado
                permalink={product.permalink} // Este es el link del producto, que redirige a mercadolibre
                addToCart={() => addToCart(product)} // Esta es una función pasada por props, que funciona para añadir productos al carrito
              />
            );
          })}
        </CatalogueStyled>
      )}
    </FeaturesStyled>
  );
}

export default Catalogue;
