import { CartStyled } from '../Styles/Cart_style'

const Cart = ({ cartItems, removeFromCart }) => {

    return (
      <CartStyled>
        <div className="empty">
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            <div>Your cart have {cartItems.length} different items !</div>
          )}
        </div>
        <div>
          <br />
          {cartItems.length !== 0 && (
            <div className= "total">
              Total: ${" "}
              {Intl.NumberFormat('de-DE').format(
              cartItems.reduce((acc, curr) => acc + curr.price * curr.count, 0))}
              {" ARS"}
            </div>
          )}
          <br />
          <div>
            <ul>
              {/* Se definen los cartItem como números para listarlos */}
              {cartItems.map((item) => (
                <li className="product-cart" key={item.id}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ margin: "auto", width: "100px" }}
                  ></img>
  
                  <div className="infoDiv">
                    <div className ="info-text">
                      <div>Quantity: {item.count}</div>
                      <div>Price: $ {Intl.NumberFormat('de-DE').format(item.price)} {item.currency_id}</div>
                      <div>Subtotal: $ {Intl.NumberFormat('de-DE').format(item.price * item.count)}{" "}</div>
                    </div>
                    <div  className="button-remove">
                      <button  onClick={() => removeFromCart(item)}>Remove</button>
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