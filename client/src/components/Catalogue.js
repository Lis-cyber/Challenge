import ProductCard from "./ProductCard";
import { FeaturesStyled } from "../Styles/Features_styles";
import { CatalogueStyled } from "../Styles/Catalogue_style";
import gifError from "../Styles/img/gif2_404.gif";

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
                key={product.id}
                title={product.title} 
                price={product.price}
                currency_id={product.currency_id} 
                available_quantity={product.available_quantity} 
                thumbnail={product.thumbnail}
                condition={product.condition} 
                permalink={product.permalink} 
                addToCart={() => addToCart(product)} 
              />
            );
          })}
        </CatalogueStyled>
      )}
    </FeaturesStyled>
  );
}
export default Catalogue;