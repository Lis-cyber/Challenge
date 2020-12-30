
const Cart = ({ cartItems, removeFromCart }) => {
    return (
      <div>
        <div>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            <div>You have {cartItems.length} different items in your cart !</div>
          )}
        </div>
        <div>
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
                      Cantidad: {item.count}
                      <br />
                      <br />
                      $ {item.price} {item.currency_id}
                      <br />
                      <br />
                      Subtotal: $ {item.price * item.count}{" "}
                      
                    </div>
                    <div  className="button-remove">
                      <button  onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length !== 0 && (
            <div>
              Total: ${" "}
              {cartItems.reduce((acc, curr) => acc + curr.price * curr.count, 0)}
              {" ARS"}
            </div>
          )}
        </div>
      </div>
    );
  };

export default Cart;