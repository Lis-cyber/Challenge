// Se importa el estilo como styled-component
import { CartStyled } from '../Styles/Cart_style'

// Se crea Cart, con parámetros cartItems y removeFromCart que son pasadas por props desde el componente padre, que es Features.js
const Cart = ({ cartItems, removeFromCart }) => {
  return (
    // Esta es la sintaxis para añadir un styled-component, reemplaza el <div>
    <CartStyled>
      <div className="empty">
        {/* Este operador condicional (ternario), se utiliza para evaluar el numero de productos de CartItems, por lo que, si la condición es verdadera, que indica que 
        el carrito tiene 0 productos, muestra un <div> con un mensaje "Cart is empty", en cambio, cuando ya no cumple la condición y el carrito tiene un número mayor a 0,
        muestra un <div> con un mensaje señalando la cantidad de productos que está en el carrito con la variable cartItems.length para la cantidad de productos.*/}
        {cartItems.length === 0 ? (
          <div>Cart is empty</div>
        ) : (
          <div>Your cart have {cartItems.length} different items !</div>
        )}
      </div>
      <div>
        {/* Este operador AND, lo que representa es que, cuando la cantidad de productos del carrito es distinta a 0, muestra el precio total de los productos*/}
        <br />
        {cartItems.length !== 0 && (
          <div className="total">
            Total: ${" "}
            {/* Esta función, lo que hace es darle un formato al número, mostrando el . para los miles y , para los decimales*/}
            {Intl.NumberFormat("de-DE").format(
              cartItems.reduce((acc, curr) => acc + curr.price * curr.count, 0)
            )}
            {" ARS"}
          </div>
        )}
        <br />
        <div>
          <ul>
            {/* Se definen los cartItem como números para listarlos */}
            {/* Se realiza un map, en el array de cartItems, para mostrar uno por uno */}
            {cartItems.map((item) => (
              <li className="product-cart" key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                ></img>

                <div className="infoDiv">
                  <div className="info-text">
                    <div>Quantity: {item.count}</div>
                    <div>
                      Price: $ {Intl.NumberFormat("de-DE").format(item.price)}{" "}
                      {item.currency_id}
                    </div>
                    <div>
                      Subtotal: ${" "}
                      {Intl.NumberFormat("de-DE").format(
                        item.price * item.count
                      )}{" "} {item.currency_id}
                    </div>
                  </div>
                  <div className="button-remove">
                    {/* Este es un boton que sirve para eliminar el producto del carrito, esta función es pasada por props. Al hacerle click, se invoca la función */}
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CartStyled>
  );
};

export default Cart;