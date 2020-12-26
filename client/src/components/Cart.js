import React, { useState } from 'react'


function Cart ({cartItems}) {
  //console.log("Soy props de Cart ", props)
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [adress, setAdress] = useState("");
  // const [cartItems, setCartItems] = useState([]);
  // const [showCheckout, setShowCheckout] = useState(false);

  // const handleInput = (event) => {
  //   event.preventDefault();
  //   setName(event.target.value);
  // }

  // const createOrder = (event) => {
  //   event.preventDefault();
  //   const order = {
  //     name,
  //     email,
  //     adress,
  //     cartItems: props.cartItems
  //   }
  //   props.createOrder(order)
  // }

  
  return (
      <div>
          {cartItems.length === 0 ? 
              (<div >Cart is Empty</div>)
              :
              (<div >You have {cartItems.length} different items in cart {" "}</div>)
          }
      </div>
          
  )
}

export default Cart



  {/* <div>
              <div>
                  <ul>
                      {cartItems.map((item) => (
                          <li key={item._id}>
                              <div>
                                  <img src={item.image} alt={item.title}></img>
                              </div>
                              <div>
                                  <div>{item.title}</div>
                                  <div className="rigth">
                                      {item.price} x {item.count} {" "}
                                      <button 
                                          className="button" 
                                          onClick={() => props.removeFromCart(item)}>
                                          Remove
                                      </button>
                                  </div>
                              </div>
                          </li>
                      )) }
                  </ul>
              </div>
              {cartItems.length !== 0 && (
              <div>
                  <div className="cart">
                      <div className="total">
                          <div>
                              Total: {" "}
                              {cartItems.reduce((a, c) => a + (c.price * c.count), 0)}
                          </div>
                          <button
                              onClick={() => {
                                setShowCheckout(true);
                              }}
                              className="button primary">Proceed</button>
                      </div>
                  </div>
                      {showCheckout && (
                          <div className="cart">
                          <form onSubmit={createOrder}>
                              <ul className="form-container">
                                  <li>
                                      <label >Email</label>
                                      <input name="email" type="email" required onChange={handleInput}></input>
                                  </li>
                                  <li>
                                      <label >Name</label>
                                      <input name="name" type="text" required onChange={handleInput}></input>
                                  </li>
                                  <li>
                                      <label >Address</label>
                                      <input name="address" type="text" required onChange={handleInput}></input>
                                  </li>
                                  <li>
                                      <button className="button primary" type="submit">Checkout</button>
                                  </li>
                              </ul>
                          </form>
                          </div>
                      )}
                  </div>
              )}
          </div>  
      </div> */}