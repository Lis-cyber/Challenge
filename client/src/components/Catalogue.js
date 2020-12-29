import ProductCard from './ProductCard';
import styles from '../Styles/styles.css'


function Catalogue ({ products , addToCart }) {
  console.log(styles)
  return (
    <div className="catalogueDiv">
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
              // Acá se agrega el producto y en ProductCard solo lo ejecuta
              addToCart = {() => addToCart(product)}
            />
          )
        })
      }
    </div>
  )
}

export default Catalogue