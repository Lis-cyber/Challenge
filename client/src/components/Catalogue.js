import ProductCard from './ProductCard';
import { CatalogueStyled } from '../Styles/Catalogue_style'


function Catalogue ({ products , addToCart }) {
  return (
    <CatalogueStyled>
      {
        products.map((product) => {
          return (
              <ProductCard 
                key = {product.id}
                title = {product.title}
                price = {product.price}
                currency_id = {product.currency_id}
                available_quantity = {product.available_quantity}
                thumbnail = {product.thumbnail}
                condition = {product.condition}
                permalink = {product.permalink}
                // Acá se agrega el producto y en ProductCard solo lo ejecuta
                addToCart = {() => addToCart(product)}
              />
          )
        })
      }
    </CatalogueStyled>
  )
}

export default Catalogue