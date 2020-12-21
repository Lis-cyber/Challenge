import ProductCard from './ProductCard';

function Catalogue ({ products }) {
  return (
    <div>
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
            />
          )
        })
      }
    </div>
  )
}

export default Catalogue