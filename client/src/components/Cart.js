
function Cart ({cartItems, removeFromCart}) {
  
  return (
      <div>
        <div>
            {cartItems.length === 0 ? 
                (<div >Cart is Empty</div>)
                :
                (<div >You have {cartItems.length} different items in cart {" "}</div>)
            }
        </div>
        <div>
            <div>
                <ul>
                    {/* Se definen los cartItem como números para listarlos */}
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <img 
                                src={item.thumbnail} 
                                alt={item.title} 
                                style={{ margin: "auto", width: "100px"}}>    
                            </img>
                            <div>
                                Cantidad: {item.count}
                                <br />
                                $ {item.price} {item.currency_id}
                                <br />
                                Subtotal: $ {item.price * item.count} {" "} 
                                <button onClick = {() => removeFromCart(item)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {cartItems.length !== 0 && 
                (
                    <div>
                        Total: {" "}
                        $ {cartItems.reduce((acc, curr) => acc + (curr.price * curr.count), 0)}
                    </div>
                )
            }
        </div>
     </div> 
  )
}

export default Cart;